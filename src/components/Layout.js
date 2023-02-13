import React ,{ useState , useEffect }from 'react';
import { Outlet , useLocation } from "react-router-dom";
import Header from './Header';
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Layout() {
  const useLocationParm = useLocation();
  const [ stepData, setStepData] = useState(0);

  useEffect(() => {
   if (useLocationParm.pathname === "/"){
    setStepData(0);
   }else{
    if (useLocationParm.pathname.indexOf("survey") > 0){
      setStepData(1);
    }else{
      setStepData(2);
    }
   }
  },[useLocationParm]);

  return (
    <MDBContainer className='d-flex justify-content-center align-items-center' style={{height : useLocationParm.pathname.indexOf("survey") > 0 ? '' : '90vh'}}>
        <MDBCard className='p-4'>  
          <Header stepData={stepData}/>
          <Outlet />
        </MDBCard>
    </MDBContainer>
  )
}
