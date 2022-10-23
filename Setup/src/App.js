import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  // const { company } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          <button className="job-btn">Company Name</button>
          <button className="job-btn">Company Name</button>
          <button className="job-btn">Company Name</button>
        </div>
        <article className="job-info">
          <h3>Title</h3>
          <h4>Company</h4>
          <p className="job-date">November 2001 - Present</p>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>Information</p>
          </div>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>Information</p>
          </div>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>Information</p>
          </div>
        </article>
      </div>
      <button className="btn" type="button">
        More info
      </button>
    </section>
  );
}

export default App;
