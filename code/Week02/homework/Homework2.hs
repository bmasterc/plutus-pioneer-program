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
import           PlutusTx.Prelude     (Bool (..), BuiltinData, Eq ((==)), traceIfFalse, ($))
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
mkValidator :: () -> MyRedeemer -> PlutusV2.ScriptContext -> Bool
mkValidator _ (MyRedeemer {flag1 = firstBool, flag2 = secondBool}) _ = traceIfFalse "NOT TRUES" $ firstBool == (secondBool == True)
{-# INLINABLE mkValidator #-}

wrappedVal :: BuiltinData -> BuiltinData -> BuiltinData -> ()
wrappedVal = wrap mkValidator
{-# INLINABLE wrappedVal #-}

validator :: PlutusV2.Validator
validator = PlutusV2.mkValidatorScript $$(PlutusTx.compile [|| wrappedVal ||])

saveVal :: IO ()
saveVal = writeValidatorToFile "./assets/week2_hw2.plutus" validator

-- Homework2.wrappedVal (toBuiltinData ()) (toBuiltinData (MyRedeemer True True)) (toBuiltinData ())
-- Homework2.wrappedVal (toBuiltinData ()) (toBuiltinData (MyRedeemer True False)) (toBuiltinData ())