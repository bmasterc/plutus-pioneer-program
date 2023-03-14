{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE DeriveAnyClass      #-}
{-# LANGUAGE DeriveGeneric       #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE OverloadedStrings   #-}

module Homework2 where

import qualified Plutus.V2.Ledger.Api as PlutusV2
import           PlutusTx             (compile, unstableMakeIsData)
import           PlutusTx.Prelude     (Bool (..), BuiltinData, traceIfFalse, ($), (/=))
import           Prelude              (IO)
import           Utilities            (wrap, writeValidatorToFile)

---------------------------------------------------------------------------------------------------
----------------------------------- ON-CHAIN / VALIDATOR ------------------------------------------

data MyRedeemer = MyRedeemer
    { flag1 :: Bool
    , flag2 :: Bool
    }

PlutusTx.unstableMakeIsData ''MyRedeemer

-- Create a validator that unlocks the funds if MyRedemeer's flags are different
mkValidator2 :: () -> MyRedeemer -> PlutusV2.ScriptContext -> Bool
mkValidator2 _ MyRedeemer {flag1 = firstBool, flag2 = secondBool} _ = traceIfFalse "NOT TRUES" $ firstBool /= secondBool
{-# INLINABLE mkValidator2 #-}

mkValidator :: () -> MyRedeemer -> PlutusV2.ScriptContext -> Bool
mkValidator _ redeemer _ = traceIfFalse "NOT TRUES" $ flag1 redeemer /= flag2 redeemer
{-# INLINABLE mkValidator #-}

wrappedVal :: BuiltinData -> BuiltinData -> BuiltinData -> ()
wrappedVal = wrap mkValidator
{-# INLINABLE wrappedVal #-}

validator :: PlutusV2.Validator
validator = PlutusV2.mkValidatorScript $$(PlutusTx.compile [|| wrappedVal ||])

saveVal :: IO ()
saveVal = writeValidatorToFile "./assets/week2_hw2.plutus" validator

-- :set -XOverloadedStrings
-- import Plutus.V2.Ledger.Contexts
-- sc = ScriptContext (TxInfo {txInfoId="0x0001"}) (Spending (TxOutRef "0x0" 0))
-- Homework2.mkValidator () (MyRedeemer True True) sc
-- Homework2.mkValidator () (MyRedeemer True False) sc

-- import PlutusTx
-- Homework2.wrappedVal (toBuiltinData ()) (toBuiltinData (MyRedeemer True True)) (toBuiltinData ())
-- Homework2.wrappedVal (toBuiltinData ()) (toBuiltinData (MyRedeemer True False)) (toBuiltinData ())

-- saveVal