import React from "react";
import './Languages.css';

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h2>Languages</h2>
      {languages.map((language) => {
        return (
          <div key={JSON.stringify(language)} className="language-list">
            <p>
              <span className="title">Language: </span>
              <span>{language.language}.</span>
            </p>
            <p>
              <span className="title">Level: </span>
              <span>{language.level}.</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
