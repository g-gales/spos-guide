import React, { useState } from "react";
import { guideData } from "./data/guideData"; // Import guide data
import FinalGuide from "./components/FinalGuide";
import "./styles/styles.css";

const App = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [currentPath, setCurrentPath] = useState([]);

  // Function to navigate deeper into guideData
  const navigateTo = (path, guide) => {
    setSelectedGuide(guide);
    setCurrentPath(path);
    console.log("Current Path:", currentPath);
    console.log("Selected Guide:", selectedGuide);
  };

  // Reset function to go back to the main menu
  const resetGuide = () => {
    setSelectedGuide(null);
    setCurrentPath([]);
  };

  // Find guide steps based on selection
  const getGuideSteps = () => {
    let guide = guideData;
    for (let key of currentPath) {
      if (guide[key]) {
        guide = guide[key];
      } else {
        return null; // If path is invalid
      }
    }
    return guide.steps ? guide : null;
  };

  const guideSteps = getGuideSteps();

  // Go back function for navigating backward
  const goBack = () => {
    if (currentPath.length > 1) {
      // Navigate to the previous step in the guide
      const previousPath = currentPath.slice(0, -1);

      let guide = guideData;
      for (let key of previousPath) {
        if (guide[key]) {
          guide = guide[key];
        } else {
          guide = null;
          break;
        }
      }
      setCurrentPath(previousPath);
      setSelectedGuide(guide);
      console.log("Current Path:", currentPath);
      console.log("Selected Guide:", selectedGuide);
    } else {
      // If we're at the first step or home, reset to the home screen
      resetGuide();
    }
  };

  return (
    <div className="guide-container">
      {!selectedGuide ? (
        <>
          <h2>Select a Guide</h2>
          <div className="tile-container">
            {Object.keys(guideData).map((category) => (
              <button
                className="tile"
                key={category}
                onClick={() => navigateTo([category], guideData[category])}>
                {category}
              </button>
            ))}
          </div>
        </>
      ) : guideSteps ? (
        <FinalGuide
          guideSteps={guideSteps}
          resetGuide={resetGuide}
          goBack={goBack}
          currentPath={currentPath}
        />
      ) : (
        <>
          <h2>Select an Option</h2>
          <div className="tile-container">
            {Object.keys(selectedGuide).map((option) => (
              <button
                className="tile"
                key={option}
                onClick={() =>
                  navigateTo([...currentPath, option], selectedGuide[option])
                }>
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={goBack} className="back-button">
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
