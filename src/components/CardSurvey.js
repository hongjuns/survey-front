import React,{ useState, useEffect } from "react";
import { MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn
} from "mdb-react-ui-kit";
import { useParams } from 'react-router-dom';
import CardSurveyQuestion from './CardSurveyQuestion';
import { call } from "../api/ApiServer";
import { useNavigate  } from "react-router-dom";

export default function CardWithFeedback() {
  const param = useParams();
  const navigate = useNavigate();
  
  const userNm = localStorage.getItem('userNm');
  const regDt = localStorage.getItem('regDt');
  const endDt = localStorage.getItem('endDt');
  //Result 데이터 State result
  const [ resultData , setResultData ] = useState({});
  const [ questionData, setQuestionData] = useState([]);
  const [ radioData, setRadioData] = useState({});
  useEffect(()=>{
    //초기값 세팅
    call("/survey/selectQuestion?key="+param.key,"GET",null).then((response) =>{
      setQuestionData(response.data);
      localStorage.setItem("key", param.key);
    })
  },[]);
  
  const handleChange = (e) => {
    const { value , name } = e.target;
    setResultData((prevState) => {
    	return { ...prevState, [name]: value}
    });
    setRadioData((prevState) => {
    	return { ...prevState, [name]: value}
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    let param ={
      'key' : localStorage.getItem('key'),
      'answerInfo' : JSON.stringify(resultData)
    }  
    call("/survey/insertAnswer","POST",param).then((response) =>{
      alert(response.data[0].msg);
      navigate('/success');
    })
   
  }

  return (
    <MDBContainer className="mh-100">
      <form onSubmit={handleSubmit}>
      <MDBRow className="justify-content-center mt-2">
       <MDBCol>
        <MDBCard>
            <div className="header"></div>
            <MDBCardBody className="text-start">
            <h3 className="mt-2"><strong>고객만족 설문조사</strong></h3>
            <p className="mb-0"> 
              ▶ 기간: {regDt} - {endDt}
            </p>
            <p className="mb-0"> 
              ▶ 대상: {userNm}
            </p>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      {questionData.map((question, index) => ( 
        <CardSurveyQuestion id={index} key={index} question={question} resultData={resultData} handleChange={handleChange} radioData={radioData}/>
      ))}
      <MDBRow className="justify-content-center mb-2">
        <MDBCol>
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