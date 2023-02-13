import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import '../css/Feedback.css';

export default function CardSurveyQuestion({question, resultData, handleChange, id, radioData}) {  
  
  const radioValue = Object.values(radioData);
  
  if(question.type === "Radio"){
    let questionArray = question.question.split(",");
    let questionArrayValue = question.questionValue.split(",");

    return(
      <MDBRow className="justify-content-center">
        <MDBCol className="mt-2">
          <MDBCard> 
            <MDBCardBody className="text-start">
              <p className="text-left">
                <strong>{question.title}</strong>
              </p>
              {questionArray.map((questionlable, index) => (
                <MDBRadio
                  name={question.questionId} 
                  id={question.questionId} 
                  label={questionlable}
                  onChange={handleChange}
                  className="mb-2"
                  value={questionArrayValue[index]} 
                  key={questionlable}
                  checked={radioValue[id] === questionArrayValue[index]}
                />
              ))}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }else if (question.type ===  "TextArea"){
    return(
      <MDBRow className="justify-content-center mt-2">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <p className="text-left">
                <strong> {question.title}</strong>
              </p>
              <MDBTextArea 
                className="mb-4" 
                label='Message' 
                id={question.questionId} 
                name={question.questionId} 
                rows={4}  
                onChange={handleChange}
                value={radioValue[id]}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )
  }else {
    return (<></>);
  }
}