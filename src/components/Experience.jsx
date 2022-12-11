import React from 'react'
import './Experience.css';

const Experience = ({experience}) => {
  return (
    <div className='experience'>
      <h2>Experience</h2>
      <div className='experience-list'>
       
        {experience.map((field)=>{
          return (<div key={JSON.stringify(field)} className='field'>
            <ul><h3>{field.field}</h3>

            {field.roles.map((gig)=>{
              return (Object.keys(gig).length!==0 ?
                <li key={JSON.stringify(gig)} className='gig'>
                <ul className='gig-list'>
                    {gig.position&&<li><span className='title'>Position: </span><span>{gig.position}.</span></li>}
                    {gig.producer&&<li><span className='title'>Producer: </span><span>{gig.producer}.</span></li>}
                    {gig.company&&<li><span className='title'>Company: </span><span>{gig.company}.</span></li>}
                    {gig.production&&<li><span className='title'>Production: </span> "{gig.production}".</li>}
                    {gig.period&&<li><span className='title'>Period: </span>{gig.period}.</li>}
                </ul>
                </li>   
                    :
                <li key={JSON.stringify(gig)} className='gig'>This section is yet to be completed...</li>
             )
            })}
            </ul>
          </div>)
        })}
      </div>
    </div>
  );
}
         
export default Experience