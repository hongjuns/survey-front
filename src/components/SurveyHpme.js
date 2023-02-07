import React from 'react';
import { useNavigate  } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SurveyHpme() {
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault(); 
    navigate(`/survey/123`);
  }

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center mh-100" style={{ width:"600px" , height: "600px" }} >
    <MDBCard className='flex-grow-1 flex-shrink-1'>
      <MDBCardHeader tag="h3" className='fw-bold'> 2023년 설문조사 </MDBCardHeader>
      <MDBCardBody>
        <div className='d-flex mt-2 mb-2'>        
            <label className='d-flex align-items-center' style={{ width: "85px", height:"35px" }}>질문유형 </label>
            <select className='select flex-grow-1 flex-shrink-1'  >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </select>
        </div>
        <div className='d-flex mt-2 mb-2'>        
            <label className='d-flex align-items-center' style={{ width: "85px" , height:"35px" }}>설문자  </label>
            <input className='flex-grow-1 flex-shrink-1' placeholder='Example label' id='form1' type='text' />
        </div>
        <div className="d-grid gap-2 col-12 mx-auto mt-3">
            <MDBBtn onClick={handleNext}>NEXT</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  )
}
