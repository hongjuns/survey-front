import React,{ useState } from "react";
import { MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn
} from "mdb-react-ui-kit";
import CardSurveyQuestion from './CardSurveyQuestion';
import { QuestionData } from '../assets/questiondata';

export default function CardWithFeedback() {

  //Result 데이터 State result
  const [ resultData , setresultData ] = useState({
    result01 : 3,
    result02 : 5,
    result03 : 'test msg'
  });

  const handleChange = (e) => {
    const { value , name } = e.target;
    setresultData((prevState) => {
    	return { ...prevState, [name]: value}
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(resultData);
  }

  return (
    <MDBContainer className="mh-100">
      <form onSubmit={handleSubmit}>
      <MDBRow className="justify-content-center mt-2">
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
      {QuestionData.map((question, index) => ( 
        <CardSurveyQuestion id={index} key={question.id} question={question} resultData={resultData} handleChange={handleChange}/>
      ))}
      <MDBRow className="justify-content-center mb-2">
        <MDBCol className="col-sm-12 col-md-6" >
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