import React, { useRef, useEffect } from 'react';

function InputPieChart (props) {

  const label = props.label;
  const name = props.name;
  const color = props.color;
  const callback = props.callback; 
  const tooltip = props.tooltip; 

  return (
    <div className="InputBoxContainer">
      <div className="inputLabelBox">
        <div className="dot" style={{backgroundColor: color}}> </div> 
        <label htmlFor={name}> {label} </label>
        <div className="infoDot">
          <div className="tooltip">i
            <span className="tooltiptext">{tooltip}</span>
          </div>
        </div>
      </div>
      
      <input type='number' min="0" max="100" id={name} onChange={callback}/>
    </div>
  )
}

export default InputPieChart;