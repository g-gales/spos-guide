import React from "react";
import Accordion from "./Accordion";
import "../styles/styles.css";

const FinalGuide = ({ guideSteps, resetGuide, goBack, currentPath }) => {
  const steps = guideSteps?.steps || [];

  const finalPath = [...currentPath];
  let breadcrumbs = "";

  finalPath.map((path, index) => {
    return ( breadcrumbs = breadcrumbs + path + (index+1 < finalPath.length ? " -> " : ""));
  });

  console.log("Final guide data:", guideSteps);

  return (
    <div className="final-guide-container">
      <h2>Guide Instructions</h2>
      <p>{breadcrumbs}</p>
      {steps.length > 0 ? (
        <div className="accordion">
          {steps.map((step, index) => (
            <Accordion step={step} index={index} className="accordion-item" />
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
