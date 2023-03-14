{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell   #-}
{-# LANGUAGE TypeApplications  #-}
{-# LANGUAGE TypeFamilies      #-}
{-# OPTIONS_GHC -Wno-unused-imports #-}

module Homework1 where

import           Plutus.V2.Ledger.Api (BuiltinData, POSIXTime, PubKeyHash,
                                       ScriptContext (scriptContextTxInfo), Validator,
                                       mkValidatorScript, TxInfo (txInfoValidRange), from, to, ivTo, UpperBound (UpperBound), Extended (Finite, NegInf), singleton, Interval (Interval, ivTo), LowerBound (LowerBound))
import           PlutusTx             (compile, unstableMakeIsData)
import           PlutusTx.Prelude     (Bool (..), traceIfFalse, (||), (&&), ($), not, (+), Ord ((<)), Maybe (Nothing, Just))
import           Utilities            (wrap)
import Plutus.V2.Ledger.Contexts (txSignedBy)
import Plutus.V1.Ledger.Interval (contains, before, after, overlaps, never)
import Prelude (odd)

---------------------------------------------------------------------------------------------------
----------------------------------- ON-CHAIN / VALIDATOR ------------------------------------------

data VestingDatum = VestingDatum
    { beneficiary1 :: PubKeyHash
    , beneficiary2 :: PubKeyHash
    , deadline     :: POSIXTime
    }

unstableMakeIsData ''VestingDatum

{-# INLINABLE mkVestingValidator #-}
-- This should validate if either beneficiary1 has signed the transaction and the current slot is before or at the deadline
-- or if beneficiary2 has signed the transaction and the deadline has passed.
mkVestingValidator :: VestingDatum -> () -> ScriptContext -> Bool
mkVestingValidator _dat () _ctx =  traceIfFalse "Someone Has to Sign!" (beneficiary1Signed || beneficiary2Signed) &&
                                   traceIfFalse "Read the DOCs" ((beneficiary1Signed && beforeOrAtDeadline) ||
                                                                (beneficiary2Signed && deadlinePassed))
    where
        info :: TxInfo
        info = scriptContextTxInfo _ctx
        
        beneficiary1Signed :: Bool
        beneficiary1Signed = txSignedBy info $ beneficiary1 _dat

        beneficiary2Signed :: Bool
        beneficiary2Signed = txSignedBy info $ beneficiary2 _dat

        -- extractFiniteUpper :: Interval a -> Maybe a
        -- extractFiniteUpper interval = case ivTo interval of
        --     UpperBound (Finite value) _isInclusive -> Just value


        -- upperLimit = extractFiniteUpper $ txInfoValidRange info

        beforeOrAtDeadline :: Bool
        -- beforeOrAtDeadline = overlaps (to $ deadline _dat) $ txInfoValidRange info
        -- beforeOrAtDeadline = before (deadline _dat) $ txInfoValidRange info
        -- beforeOrAtDeadline = (after (deadline _dat + 1000) $ txInfoValidRange info) || (not $ contains txInfoValidRange info (singleton ))
        -- beforeOrAtDeadline = (UpperBound (Finite (deadline _dat + 1000)) True) < (ivTo $ txInfoValidRange info)

        -- beforeOrAtDeadline = upperLimit < deadline _dat + 1000

        beforeOrAtDeadline = after (deadline _dat) (txInfoValidRange info)

        deadlinePassed :: Bool
        deadlinePassed = before (deadline _dat) $ txInfoValidRange info

        -- beforeOrAtDeadline = not beforeOrAtDeadline


{-# INLINABLE  mkWrappedVestingValidator #-}
mkWrappedVestingValidator :: BuiltinData -> BuiltinData -> BuiltinData -> ()
mkWrappedVestingValidator = wrap mkVestingValidator

validator :: Validator
validator = mkValidatorScript $$(compile [|| mkWrappedVestingValidator ||])
