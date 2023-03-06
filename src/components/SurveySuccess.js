import React from 'react'
import '../css/Success.css';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody
} from 'mdb-react-ui-kit';
import Typed from 'react-typed';

export default function SurveySuccess() {
  return (
    <MDBContainer className="d-flex justify-content-center align-items-center">    
    <MDBCard className='flex-grow-1 flex-shrink-1 mt-3 mb-3'>
        <div className='d-flex justify-content-center mt-3 checkBox'> <i className="checkmark">✓</i> </div> 
      <MDBCardBody className='d-flex flex-column justify-content-center align-items-center '>
         <Typed
                    strings={['설문이 완료 되었습니다.']}
                    typeSpeed={60}
                    className='fw-bold'
                    style={{ fontSize: "2rem",color: "#88B04B"}}
                />
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  )
}
