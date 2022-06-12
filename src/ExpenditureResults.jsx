import React, {useRef, useEffect, useState} from 'react'; 
import PieChart from "./PieChartFunctional.jsx";

function ExpenditureResults(props) {
  let user = [...props.userData];  
  const restartCallback = props.restartCallback; 
  let expenditureData = [ 
  { name: "Medical Center", value: 43, color: "#F0BF00"}, 
  { name: "Teaching and Teaching Support", value: 23, color: "#F6E50E" }, 
  { name: "Research", value: 11, color: "#FFF688" }, 
  { name: "Student Services and Financial Aid", value: 8, color: "#5F63EC" }, 
  { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: "#71A8FF" }, 
  { name: "Administration", value: 3, color: "#0F7AB4" }, 
  { name: "Non-Educational Services", value: 2, color: "#D4E4FF" }, 
  { name: "Public Service", value: 2, color: "#bdbdbd" }, 
  { name: "Depreciation, Interest, etc.", value: 6, color: "white" } 
  ]; 
  
  return (
    <div> 
      <div className='componentTitle'>
        <span>Your Expenditure Guess</span>
      </div>
      
      <PieChart name="userExpenditureGuess" data={user}/>

      <div className='componentTitle'>
        <span>Actual Expenditure</span>
      </div>

      <PieChart name="actualExpenditureData" data={expenditureData}/>

      <div className='buttonWrapper'>
        <button className="whiteButton" id="compareRestartButton" onClick={function() {
          restartCallback(); 
        }}>Restart</button>
      </div>

    </div>
  )
}

export default ExpenditureResults; 