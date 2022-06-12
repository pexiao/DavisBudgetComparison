
import React, { useRef, useEffect, useState } from 'react';
import Revenue from "./RevenueComponent.jsx";
import Expenditure from "./ExpenditureComponent.jsx";
import RevenueResults from "./RevenueResults.jsx";
import ExpenditureResults from "./ExpenditureResults.jsx"
import { Stepper, Step, StepLabel } from "@material-ui/core";
import './App.css';

/* App */
function App() {

  // All the data associated with the app 
  let [appState, setAppState] = useState(0);

  let [userRevenue, setUserRevenue] = useState([]);
  let [userExpenditure, setUserExpenditure] = useState([]); 

  function setPage(pageNum) {
    setAppState(pageNum); 
  }
  
  function setRevenue(data) {
    setUserRevenue(data); 
  }

  function setExpenditure(data) {
    setUserExpenditure(data); 
  }

  function getUserRevenueData() {
    let medicalValue = document.getElementById("MedicalCenterInput").value; 
    medicalValue = check_for_Null(medicalValue); 
    let studentValue = document.getElementById("StudentFeesInput").value;
    studentValue = check_for_Null(studentValue);  
    let californiaValue = document.getElementById("CaliforniaInput").value;
    californiaValue = check_for_Null(californiaValue);
    let tuitionValue = document.getElementById("TuitionInput").value;
    tuitionValue = check_for_Null(tuitionValue);
    let researchValue = document.getElementById("ResearchInput").value;
    researchValue = check_for_Null(researchValue);
    let pellGrantValue = document.getElementById("PellGrantInput").value;
    pellGrantValue = check_for_Null(pellGrantValue);
    let noneduValue = document.getElementById("NoneduInput").value;
    noneduValue = check_for_Null(noneduValue);
    let giftValue = document.getElementById("GiftInput").value;
    giftValue = check_for_Null(giftValue); 

    let newData = [ 
    { name: "Medical Center", value: medicalValue, color: "#F0BF00" }, 
    { name: "Student Fees", value: studentValue, color: "#F6E50E" }, 
    { name: "State of California", value: californiaValue, color: "#FFF688" }, 
    { name: "Tuition", value: tuitionValue, color: "#5F63EC" }, 
    { name: "Research Grants and Contracts", value: researchValue, color: "#71A8FF" }, 
    { name: "Pell Grants", value: pellGrantValue, color: "#0F7AB4" }, 
    { name: "Non-educational Services", value: noneduValue, color: "#D4E4FF" }, 
    { name: "Gifts, Endowments, Interest, Etc.", value: giftValue, color: "#bdbdbd" } ];

    return newData; 
  } 

  function getExpenditureData() {
    let medicalValue = document.getElementById("MedicalExpendInput").value;  
    medicalValue = check_for_Null(medicalValue); 
    let teachingValue = document.getElementById("TeachingExpendInput").value;
    teachingValue = check_for_Null(teachingValue);  
    let researchValue = document.getElementById("ResearchExpendInput").value;
    researchValue = check_for_Null(researchValue);
    let studentValue = document.getElementById("StudentExpendInput").value;
    studentValue = check_for_Null(studentValue);
    let operationValue = document.getElementById("OperationsExpendInput").value;
    operationValue = check_for_Null(operationValue);
    let adminValue = document.getElementById("AdminExpendInput").value;
    adminValue = check_for_Null(adminValue);
    let noneduValue = document.getElementById("NoneduExpendInput").value;
    noneduValue = check_for_Null(noneduValue);
    let publicValue = document.getElementById("PublicExpendInput").value;
    publicValue = check_for_Null(publicValue); 
    let depreciationValue = document.getElementById("DepreciationExpendInput").value;
    depreciationValue = check_for_Null(depreciationValue);

    let newData = [ 
  { name: "Medical Center", value: medicalValue, color: "#F0BF00"}, 
  { name: "Teaching and Teaching Support", value: teachingValue, color: "#F6E50E" }, 
  { name: "Research", value: researchValue, color: "#FFF688" }, 
  { name: "Student Services and Financial Aid", value: studentValue, color: "#5F63EC" }, 
  { name: "Operations and Maintenance (Buildings, etc)", value: operationValue, color: "#71A8FF" }, 
  { name: "Administration", value: adminValue, color: "#0F7AB4" }, 
  { name: "Non-Educational Services", value: noneduValue, color: "#D4E4FF" }, 
  { name: "Public Service", value: publicValue, color: "#bdbdbd" }, 
  { name: "Depreciation, Interest, etc.", value: depreciationValue, color: "white" } 
  ]; 
    
    return newData;
  }

  function check_for_Null(data) {
    let result = ((data == "") ? 0 : (Number(data))); 
    return result; 
  }

  function revenue_Next_Onclick() {
    let totalValue = document.getElementById("RevenueTotal").value;
    totalValue = check_for_Null(totalValue);
    if (totalValue == 100) {
      let userData = getUserRevenueData();
      setUserRevenue(userData); 

      setPage(1);
    } else {
      window.alert("You need to have a total of exactly 100.")
    }
  } 

  function expenditure_Prev_Onclick() {
    setPage(0);
  }

  function expenditure_Compare_Onclick() {
    let totalValue = document.getElementById("ExpenditureTotal").value;
    totalValue = check_for_Null(totalValue);
    if (totalValue == 100) {
      let userData = getExpenditureData();
      setUserExpenditure(userData); 

      setPage(2);
    } else {
      window.alert("You need to have a total of exactly 100.")
    }
  }

  function compare_next_Onclick() {
    setPage(3); 
  }

  function compare_restart_Onclick() {
    setRevenue([]); 
    setExpenditure([]); 
    setPage(0);
  }


  if (appState == 0) {
    return (
      <div>
      <Stepper style={{backgroundColor: '#2E2E2E', color: 'white'}} activeStep={0} alternativeLabel>
          <Step key={"Revenue"}>
            <StepLabel>{"Revenue"}</StepLabel>
          </Step>
          <Step key={"Expenditure"}>
            <StepLabel>{"Expenditure"}</StepLabel>
          </Step>
          <Step key={"Compare"}>
            <StepLabel>{"Compare"}</StepLabel>
          </Step>
      </Stepper>
        <Revenue data={userRevenue} updateCallback={setRevenue} pageCallback={revenue_Next_Onclick}/>
      </div>
    )
  } else if (appState == 1) {
    return (
      <div>
      <Stepper style={{backgroundColor: '#2E2E2E', color: 'white'}} activeStep={1} alternativeLabel>
          <Step key={"Revenue"}>
            <StepLabel>{"Revenue"}</StepLabel>
          </Step>
          <Step key={"Expenditure"}>
            <StepLabel>{"Expenditure"}</StepLabel>
          </Step>
          <Step key={"Compare"}>
            <StepLabel>{"Compare"}</StepLabel>
          </Step>
      </Stepper>
        <Expenditure  data={userExpenditure} updateCallback={setExpenditure} prevCallback={expenditure_Prev_Onclick} compareCallback={expenditure_Compare_Onclick}/>
      </div>
    )
  } else if (appState == 2) {
    return (
      <div>
      <Stepper style={{backgroundColor: '#2E2E2E', color: 'white'}} activeStep={2} alternativeLabel>
          <Step key={"Revenue"}>
            <StepLabel>{"Revenue"}</StepLabel>
          </Step>
          <Step key={"Expenditure"}>
            <StepLabel>{"Expenditure"}</StepLabel>
          </Step>
          <Step key={"Compare"}>
            <StepLabel>{"Compare"}</StepLabel>
          </Step>
      </Stepper>
        <RevenueResults userData={userRevenue} nextCallback={compare_next_Onclick}/>
      </div>
      )
  } else if (appState == 3) {
    return (
      <div> 
      <Stepper style={{backgroundColor: '#2E2E2E', color: 'white'}} activeStep={3} alternativeLabel>
          <Step key={"Revenue"}>
            <StepLabel>{"Revenue"}</StepLabel>
          </Step>
          <Step key={"Expenditure"}>
            <StepLabel>{"Expenditure"}</StepLabel>
          </Step>
          <Step key={"Compare"}>
            <StepLabel>{"Compare"}</StepLabel>
          </Step>
      </Stepper>
        <ExpenditureResults userData={userExpenditure} restartCallback={compare_restart_Onclick}/>
      </div>
        
      )
  }
  
}

export default App;