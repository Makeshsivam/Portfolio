import React from 'react';
import './Resume.css'; // adjust the path as needed
import ExcelImg from '@/assets/images/Excel.png';
import PowerBIImg from '@/assets/images/Datascience.png';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Internship Experience</h2>

      <div className="internship">
        <h3>Data Science Intern – Power BI</h3>
        <p>
          During this internship, I worked on data visualization and business intelligence using Power BI. I was responsible for building interactive dashboards, performing data cleaning, and delivering insights through visual reports.
        </p>
        <img
          src="src/assets/images/Datascience.png"
          alt="Power BI Internship Dashboard"
          className="resume-image"
        />
      </div>

      <div className="internship">
        <h3>Business Analytics In Excel</h3>
        <p>
          Completed Business Analytics in Excel – Gained hands-on experience with data cleaning, pivot tables, dashboards, and business insights using Excel.
        </p>
        <img
          src={ExcelImg} alt="Excel Project" // Place your second image here
          
          className="resume-image"
        />
      </div>
    </section>
  );
}

export default Resume;
