import React, {useRef, useEffect, useState} from 'react'; 
import PieChart from "./PieChartFunctional.jsx";

function RevenueResults(props) {
  let user = [...props.userData];  
  const nextCallback = props.nextCallback; 

  let revenueData = [ 
    { name: "Medical Center", value: 45, color: "#F0BF00" }, 
    { name: "Student Fees", value: 4, color: "#F6E50E" }, 
    { name: "State of California", value: 8, color: "#FFF688" }, 
    { name: "Tuition", value: 11, color: "#5F63EC" }, 
    { name: "Research Grants and Contracts", value: 13, color: "#71A8FF" }, 
    { name: "Pell Grants", value: 1, color: "#0F7AB4" }, 
    { name: "Non-educational Services", value: 11, color: "#D4E4FF" }, 
    { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: "#bdbdbd" } 
    ];
  
  return (
    <div> 
      <div className='componentTitle'>
        <span>Your Revenue Guess</span>
      </div>

      <PieChart name="userRevenueGuess" data={user}/>

      <div className='componentTitle'>
        <span>Actual Revenue</span>
      </div>

      <PieChart name="actualExpenditureData" data={revenueData}/>

      <div className='buttonWrapper'>
        <button className="whiteButton" id="compareNextButton" onClick={function() {
          nextCallback(); 
        }}>Next</button>
      </div>
    </div>
  )
}

export default RevenueResults; 