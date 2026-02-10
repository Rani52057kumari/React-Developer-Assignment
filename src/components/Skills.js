import React from 'react';

function Skills({ skillsList }) {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
