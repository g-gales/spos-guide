import React, { useState } from "react";
import "../styles/styles.css";

const FinalGuide = ({ guideSteps, resetGuide, goBack, currentPath }) => {
  const steps = guideSteps?.steps || [];

  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Open/close logic
  };

  console.log("Final guide data:", guideSteps);

  return (
    <div className="final-guide-container">
      <h2>Guide Instructions</h2>
      {steps.length > 0 ? (
        <div className="accordion">
          {steps.map((step, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}>
                {step.summary}
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : ""
                }`}>
                {step.details}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No guide available.</p>
      )}

      <div className="navigation-buttons">
        <button onClick={goBack} className="back-button">
          Go Back
        </button>
        <button onClick={resetGuide} className="home-button">
          Home
        </button>
      </div>
    </div>
  );
};

export default FinalGuide;
