import React  , { useState , useRef} from 'react';
import { useNavigate  } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';
import { optionData }  from '../assets/selectoptiondata'; 
import { call } from "../api/ApiServer";

export default function SurveyHpme() {
  const navigate = useNavigate();
  const [ selected , setSelected ] = useState(1);
  const [ selectText , setSelectText ] = useState("");
  const focusRef = useRef();
  const handleNext = (e) => {
    e.preventDefault(); 
    
    if(selectText === ""){
      alert("설문자를 입력해주세요.");
      return false;
    }

    let param ={
      'questionSeq' : selected,
      'userNm' : selectText
    }  

    call("/survey/insertSurvey","POST",param).then((response) =>{
      let regDt = new Date (response.data[0].regDt.replaceAll(".","-"));
      let userNm = response.data[0].userNm;
    
      let processDate = new Date();
      processDate.setDate(regDt.getMonth()+1);
      processDate.setDate(regDt.getDate() + 7);
      
      let year = processDate.getFullYear();
      let month = processDate.getMonth() >= 9 ? processDate.getMonth()+1 : "0"+(processDate.getMonth()+1);
      let date  = processDate.getDate();
      let endDt = String(year)+"."+ String(month) +"."+String(date);
      debugger;
      localStorage.setItem("userNm", userNm);
      localStorage.setItem("regDt", response.data[0].regDt);
      localStorage.setItem("endDt", endDt);
      navigate(`/survey/`+response.data[0].key);
    })
  }
  const handleChangeSelect = (e) =>{ 
    setSelected(e.target.value); 
    focusRef.current.focus();
  }
  const handleSetValue = (e) => {setSelectText(e.target.value);}
  return (
    <MDBContainer className="d-flex justify-content-center align-items-center" >    
    <MDBCard className='flex-grow-1 flex-shrink-1'>
      <MDBCardHeader tag="h3" className='fw-bold'> 2023년 설문조사 </MDBCardHeader>
      <MDBCardBody>
        <div className='d-flex mt-2 mb-2'>        
          <label className='d-flex align-items-center' style={{ width: "85px", height:"35px" }}>질문유형 </label>
          <select className='select flex-grow-1 flex-shrink-1'  onChange={handleChangeSelect}  value={selected}>
            {optionData.map((optionData) => ( 
              <option value={optionData.value}  key={optionData.id}>{optionData.name} </option>
            ))}
          </select>
        </div>
        <div className='d-flex mt-2 mb-2'>        
          <label className='d-flex align-items-center' style={{ width: "85px" , height:"35px" }}>설문자  </label>
          <input 
                  ref={focusRef}
                  className='flex-grow-1 flex-shrink-1' 
                  placeholder='성명을 입력해주세요' 
                  type='text' 
                  value={selectText}
                  onChange={handleSetValue}
            />
        </div>
        <div className="d-flex justify-content-center">
            <MDBBtn className='btn btn-primary' onClick={handleNext}>NEXT</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>

  
  )
}
