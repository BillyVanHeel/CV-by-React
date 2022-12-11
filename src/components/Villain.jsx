import React from "react";
import "./Villain.css";

const Villain = ({ villain }) => {
  return (
    <div className="villain">
      <img src={villain.picture} alt={villain.name} className="villain-pic" />
      <div className="Villain-info">
        <h2 className="villain-name">{villain.name}</h2>
        <div className="villain-contact">
          <p>
            {" "}
            <span className="title">Email:</span><a href ={'mailto:' + villain.email}>{villain.email}</a>.
          </p>
          <p>
            <span className="title">Phone:</span> {villain.phone}
          </p>
          <p>
            <span className="title">Birth Date:</span>{villain.birthDate}.
          </p>
          <p>
            <span className="title">Birth Place: </span>{villain.birthPlace}.
          </p>
          <p>
            <span className="title">Github Profile: </span> <a href={villain.githubProfile}>BillyVanHeel's Github</a>.
          </p>
        </div>
        <ol className="villain-about">
          {villain.aboutMe.map((fact) => {
            return (
              <li key={JSON.stringify(fact)} className="villain-fact">
                <p>"{fact.info}"</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Villain;
