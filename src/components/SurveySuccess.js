import React from 'react'
import '../css/Success.css';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody
} from 'mdb-react-ui-kit';

export default function SurveySuccess() {
  return (
    <MDBContainer className="d-flex justify-content-center align-items-center">    
    <MDBCard className='flex-grow-1 flex-shrink-1 mt-3 mb-3'>
        <div className='d-flex justify-content-center mt-3 checkBox'> <i className="checkmark">✓</i> </div> 
      <MDBCardBody className='d-flex flex-column justify-content-center align-items-center '>
         <h1 className='fw-bold'>Success</h1> 
         <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  )
}
