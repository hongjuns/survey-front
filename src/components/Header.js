import React from 'react'
import { Stepper  , Step} from 'react-form-stepper';
export default function Header( { stepData }) {
  return (
    <Stepper activeStep={stepData} styleConfig={{ activeBgColor: "green" }}>
        <Step label="1. 설문유형" />
        <Step label="2. 설문조사" />
        <Step label="3. 설문완료" />
    </Stepper>
  )
}
