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

export default function CardSurveyQuestion({question, resultData, handleChange, id}) {  
  const frequency = Object.values(resultData)
  if(question.type === "Radio"){
    let questionArray = question.question.split(",");
    return(
      <MDBRow className="justify-content-center">
        <MDBCol className="col-sm-12 col-md-6 mt-2">
          <MDBCard> 
            <MDBCardBody className="text-start">
              <p className="text-left">
                <strong>{question.title}</strong>
              </p>
              {questionArray.map((questionlable, index) => (
                <MDBRadio
                  name={question.id} 
                  id={question.id} 
                  label={questionlable}
                  onChange={handleChange}
                  className="mb-2"
                  value={index+1} 
                  key={questionlable}
                  checked={frequency[id] === index+1}
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
        <MDBCol className="col-sm-12 col-md-6">
          <MDBCard>
            <MDBCardBody>
              <p className="text-left">
                <strong> {question.title}</strong>
              </p>
              <MDBTextArea 
                className="mb-4" 
                label='Message' 
                id={question.name} 
                name={question.name} 
                rows={4}  
                onChange={handleChange}
                value={frequency[id]}
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