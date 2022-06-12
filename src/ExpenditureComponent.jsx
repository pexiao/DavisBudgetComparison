import React, {useRef, useEffect, useState} from 'react'; 
import PieChart from "./PieChartFunctional.jsx";
import InputPieChart from "./InputPieChart.jsx";

function Expenditure(props) {

  const prevPageCallback = props.prevCallback; 
  const comparePageCallback = props.compareCallback;
  const updateChart = props.updateCallback; 
  let userExpenditureData = [...props.data]; 

  let toolTipExpenditure = {
    medicalCenter: "The cost of providing care at the Medical Center is roughly what we get paid to provide it.",  
    teaching : "Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.", 
    research : "The costs of doing the research, mostly researcher salaries.", 
    student : "Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.",
    operation : "Upkeep of the grounds and building, and utilities, which are less than 1%.",
    admin : "Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets.",
    nonedu : "The costs of providing dorms, dining,parking, etc.",
    publicExpend : "Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.",
    depreciation : "Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses."
  }

  function updatePieChart() {
    let newData = getData();
    updateChart(newData); 
  }

  function getData() {
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
    
    let total = medicalValue + teachingValue + researchValue + studentValue + operationValue + adminValue + noneduValue + publicValue + depreciationValue; 
    let totalText = document.getElementById("ExpenditureTotal"); 
    totalText.value = total;
    totalText.readOnly = true;
    return newData; 
  }

  function check_for_Null(data) {
    let result = (data == "") ? 0 : (Number(data)); 
    return result; 
  }

   
  return (
    <div>
      <div className='componentTitle'>
        <span>UC Davis Expenditures</span>
      </div> 
      
      <div id='ExpenditureContent'>
        <PieChart name="ExpenditurePieChart" data={userExpenditureData} />

        <div className='inputTitle'>
          <span>Function</span>
          <span>Percentage (%)</span>
        </div>

        <InputPieChart name="MedicalExpendInput" label="Medical Center" color="#F0BF00" callback={updatePieChart} 
        tooltip={toolTipExpenditure.medicalCenter}/>

        <InputPieChart name="TeachingExpendInput" label="Teaching and Teaching Support"
        color="#F6E50E" callback={updatePieChart} 
        tooltip={toolTipExpenditure.teaching}/>

        <InputPieChart name="ResearchExpendInput" label="Research" color="#FFF688" callback={updatePieChart}
        tooltip={toolTipExpenditure.research}/>

        <InputPieChart name="StudentExpendInput" label="Student Services and Financial Aid" color="#5F63EC" callback={updatePieChart}
        tooltip={toolTipExpenditure.student}/>

        <InputPieChart name="OperationsExpendInput" label="Operations and Maintenance (Buildings, etc)" color="#71A8FF" callback={updatePieChart}
        tooltip={toolTipExpenditure.operation}/>

        <InputPieChart name="AdminExpendInput" label="Administration" color="#0F7AB4" callback={updatePieChart}
        tooltip={toolTipExpenditure.admin}/>

        <InputPieChart name="NoneduExpendInput" label="Non-educational Services" color="#D4E4FF" callback={updatePieChart}
        tooltip={toolTipExpenditure.nonedu}/>

        <InputPieChart name="PublicExpendInput" label="Public Service" color="#bdbdbd" callback={updatePieChart}
        tooltip={toolTipExpenditure.publicExpend}/>

        <InputPieChart name="DepreciationExpendInput" label="Depreciation, Interest, etc." color="white" callback={updatePieChart}
        tooltip={toolTipExpenditure.depreciation}/>

        <div className="TotalWrapper"> 
          <span>Total (%)</span> <input className='TotalPercentage' id="ExpenditureTotal"/> 
        </div>
      </div>

      <div className='buttonWrapper'>
        <button className="whiteButton" id="PrevButton" onClick={function() {
          prevPageCallback(); 
        }}>Prev</button>
        <button className="whiteButton" id="CompareButton" onClick={function() {
          comparePageCallback(); 
        }}>Compare</button>
      </div>
      
    </div>
  )
}

export default Expenditure; 