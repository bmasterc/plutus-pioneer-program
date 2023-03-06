{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE OverloadedStrings   #-}

module Homework1 where

import qualified Plutus.V2.Ledger.Api as PlutusV2
import           PlutusTx             (compile)
import           Prelude              (IO)
import           PlutusTx.Prelude     (Bool (..), BuiltinData, Eq ((==)), traceIfFalse, ($))
import           Utilities            (wrap, writeValidatorToFile)

---------------------------------------------------------------------------------------------------
----------------------------------- ON-CHAIN / VALIDATOR ------------------------------------------

-- This should validate if and only if the two Booleans in the redeemer are True!
mkValidator :: () -> (Bool, Bool) -> PlutusV2.ScriptContext -> Bool
mkValidator _ (firstBool, secondBool) _ = traceIfFalse "NOT TRUES" $ firstBool == (secondBool == True)
{-# INLINABLE mkValidator #-}

wrappedVal :: BuiltinData -> BuiltinData -> BuiltinData -> ()
wrappedVal = wrap mkValidator
{-# INLINABLE wrappedVal #-}

validator :: PlutusV2.Validator
validator = PlutusV2.mkValidatorScript $$(PlutusTx.compile [|| wrappedVal ||])

saveVal :: IO ()
saveVal = writeValidatorToFile "./assets/week2_hw1.plutus" validator

-- Homework1.wrappedVal (toBuiltinData ()) (toBuiltinData (True, True)) (toBuiltinData ())
-- Homework1.wrappedVal (toBuiltinData ()) (toBuiltinData (True, False)) (toBuiltinData ())

-- sc = ScriptContext (TxInfo {txInfoId="0x0001"}) (Spending (TxOutRef "0x0" 0))
-- Homework1.mkValidator () (True, True) sc
-- Homework1.mkValidator () (True, False) sc

-- saveVal