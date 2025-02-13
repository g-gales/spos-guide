import React, { createContext, useContext, useState } from "react";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {
  const [selectedSteps, setSelectedSteps] = useState([]);

  const navigateToStep = (step) => {
    setSelectedSteps([...selectedSteps, step]);
  };

  const goBack = () => {
    setSelectedSteps(selectedSteps.slice(0, -1));
  };

  const resetGuide = () => {
    setSelectedSteps([]); // Reset back to home
  };

  return (
    <GuideContext.Provider
      value={{ selectedSteps, navigateToStep, goBack, resetGuide }}>
      {children}
    </GuideContext.Provider>
  );
};

export const useGuide = () => useContext(GuideContext);
