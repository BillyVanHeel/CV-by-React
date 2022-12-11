import React from 'react';
import './Education.css';

const Education = ({education}) => {
  return (
    <div className='education'>
    <h2>Education</h2>
    <div className='education-list'>
      {education.map((formation)=>{
        return (<ul key={JSON.stringify(formation)} className='formation'>
          <li className='formation-name'>{formation.content}</li>
          <li>By {formation.center}</li>
          <li>Period: {formation.period}</li>  
        </ul>)
      })}
    </div>
    </div>
  )
}

export default Education