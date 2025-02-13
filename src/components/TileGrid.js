import React from "react";
import { useGuide } from "../context/GuideContext";
import { guideData } from "../data/guideData";
import "../styles/styles.css";

const getStepOptions = (steps) => {
  let current = guideData;
  for (const step of steps) {
    if (current[step]) {
      current = current[step];
    } else {
      return null;
    }
  }
  return current;
};

const TileGrid = () => {
  const { selectedSteps, navigateToStep, goBack } = useGuide();
  const stepOptions = getStepOptions(selectedSteps);
  const isFinalStep = Array.isArray(stepOptions); // Check if we reached the guide steps

  return (
    <div className="tile-container">
      {!isFinalStep && <h2 className="title">Select an Option:</h2>}
      {stepOptions &&
        !isFinalStep &&
        Object.keys(stepOptions).map((option) => (
          <button
            key={option}
            className="tile-button"
            onClick={() => navigateToStep(option)}>
            {option}
          </button>
        ))}
      <div className="nav-buttons">
        {selectedSteps.length > 0 && (
          <button className="nav-button" onClick={goBack}>
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default TileGrid;
