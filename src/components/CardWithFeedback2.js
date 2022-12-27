import React,{ useState  } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import '../css/Feedback.css';

export default function CardWithFeedback() {

 //Result 데이터 State result
 const [ resultData , setresultData ] = useState({
    result01 : '',
    result02 : '',
    result03 : ''
  });

  const handleSetValue = (e) => {
    setresultData((prevState) => {
    	return { ...prevState, result03: e.target.value }
    });
  };

  const handleChange = (e) => {
    const { value , name } = e.target;
    setresultData((prevState) => {
    	return { ...prevState, [name]: e.target.value }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(resultData);
    debugger;
  }

  return (
    <MDBContainer className="mh-100">
      <form onSubmit={handleSubmit}>
      <MDBRow className="justify-content-center mt-2 mb-2">
       <MDBCol className="col-sm-12 col-md-6" >
        <MDBCard>
            <div className="header"></div>
            <MDBCardBody className="text-start">
            <h3 className="mt-2"><strong>고객만족 설문조사</strong></h3>
            <p className="mb-0"> 
              ▶ 기간: 2022. 12. 27(화) - 12. 28 (목)
            </p>
            <p className="mb-0"> 
              ▶ 대상: React 임직원 
            </p>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center">
        <MDBCol className="col-sm-12 col-md-6">
          <MDBCard>
            <MDBCardBody className="text-start">
              <p className="text-left">
                <strong>1) Your rating:</strong>
              </p>
              <MDBRadio
                name="result01"
                id="flexRadioDefault1"
                label="Very good"
                className="mb-2"
                value='1'
                onChange={handleChange}
              />
              <MDBRadio
                name="result01"
                id="flexRadioDefault2"
                label="Good"
                className="mb-2"
                value='2'
                onChange={handleChange}
              />
              <MDBRadio
                name="result01"
                id="flexRadioDefault3"
                label="Medicore"
                className="mb-2"
                value='3'
                onChange={handleChange}
              />
              <MDBRadio
                name="result01"
                id="flexRadioDefault4"
                label="Bad"
                className="mb-2"
                value='4'
                onChange={handleChange}
              />
              <MDBRadio
                name="result01"
                id="flexRadioDefault5"
                label="Very bad"
                className="mb-2"
                value='5'
                onChange={handleChange}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mt-2">
        <MDBCol className="col-sm-12 col-md-6">
          <MDBCard>
          <MDBCardBody className="text-start">
              <p className="text-left">
                <strong>2) Your rating:</strong>
              </p>
              <MDBRadio
                name="result02"
                id="flexRadioDefault1"
                label="Very good"
                className="mb-2"
                value='1'
                onChange={handleChange}
              />
              <MDBRadio
                name="result02"
                id="flexRadioDefault2"
                label="Good"
                className="mb-2"
                value='2'
                onChange={handleChange}
              />
              <MDBRadio
                name="result02"
                id="flexRadioDefault3"
                label="Medicore"
                className="mb-2"
                value='3'
                onChange={handleChange}
              />
              <MDBRadio
                name="result02"
                id="flexRadioDefault4"
                label="Bad"
                className="mb-2"
                value='4'
                onChange={handleChange}
              />
              <MDBRadio
                name="result02"
                id="flexRadioDefault5"
                label="Very bad"
                className="mb-2"
                value='5'
                onChange={handleChange}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mt-2">
        <MDBCol className="col-sm-12 col-md-6">
          <MDBCard>
            <MDBCardBody>
              <p className="text-left">
                  <strong> What could we improve?</strong>
                </p>
                <MDBTextArea className="mb-4" label='Message' id='textAreaExample' rows={4}   onChange={handleSetValue}/>
            </MDBCardBody>
          </MDBCard>
          <MDBCardFooter>
              <div className="text-end">
                <MDBBtn>Submit</MDBBtn>
              </div>
            </MDBCardFooter>
        </MDBCol>
      </MDBRow>
      </form>
    </MDBContainer>
  );
}