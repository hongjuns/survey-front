import React from 'react'
import { Stepper  , Step} from 'react-form-stepper';
export default function Header( { stepData }) {
  return (
    <Stepper activeStep={stepData} styleConfig={{ activeBgColor: "green" }}>
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
    </Stepper>
  )
}
