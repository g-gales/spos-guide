import React, { useState } from "react";
import { guideData } from "./data/guideData"; // Import guide data
import FinalGuide from "./components/FinalGuide";
import "./styles/styles.css";

const App = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [currentPath, setCurrentPath] = useState([]);
  const [tilesVisible, setTilesVisible] = useState(true);

  // Function to navigate deeper into guideData
  const navigateTo = (path, guide) => {
    setTilesVisible(false);
    setTimeout(() => {
      setSelectedGuide(guide);
      setCurrentPath(path);
      setTilesVisible(true);
    }, 850);
  };

  // Reset function to go back to the main menu
  const resetGuide = () => {
    setTilesVisible(false);
    setTimeout(() => {
      setSelectedGuide(null);
      setCurrentPath([]);
      setTilesVisible(true);
    }, 100);
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
      setTilesVisible(false);
      setTimeout(() => {
        setCurrentPath(previousPath);
        setSelectedGuide(guide);
        setTilesVisible(true);
      }, 100);
    } else {
      // If we're at the first step or home, reset to the home screen
      resetGuide();
    }
  };

  return (
    <div className="guide-container">
      {!selectedGuide ? (
        <>
          <h2>Select Your Guide</h2>
          <div className="tile-container">
            {Object.keys(guideData).map((category) => (
              <button
                className={`tile ${tilesVisible ? "show" : ""}`}
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
          <h2>Find Your Solution</h2>
          <div className="tile-container">
            {Object.keys(selectedGuide).map((option) => (
              <button
                className={`tile ${tilesVisible ? "show" : ""}`}
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
