import "./App.css";
import { CV } from "./CV/CV";
import { useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Villain from "./components/Villain";
import Languages from "./components/Languages";

const { villain, experience, education, languages } = CV;

function App() {
  const [show, setShow] = useState("experience");
  return (
    <div className="App">
      <Villain villain={villain} />
      <div>
        <button onClick={() => setShow("experience")}>Experience</button>
        <button onClick={() => setShow("education")}>Education</button>
        <button onClick={() => setShow("languages")}>Languages</button>
      </div>
      {show === "experience" && <Experience experience={experience} />}
      {show === "education" && <Education education={education} />}
      {show === "languages" && <Languages languages={languages} />}
    </div>
  );
}

export default App;
