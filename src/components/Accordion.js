import React, { useState } from "react";

const Accordion = ({ step, index }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open
  const [stepComplete, setStepComplete] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Open/close logic
  };

  const toggleComplete = (index) => {
    setStepComplete(!stepComplete);
    if (openIndex === index) {
      toggleAccordion(index);
    }
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header-full">
        <input
          key={index}
          type="checkbox"
          checked={stepComplete}
          onChange={() => toggleComplete(index)}
          className="accordion-checkbox"
        ></input>
        <button
          className={`"accordion-header" ${
            !stepComplete ? "" : "accordion-header-complete"
          }`}
          onClick={() => toggleAccordion(index)}
          disabled={stepComplete}
        >
          {index + 1 + ". " + step.summary}
        </button>
      </div>
      <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
        {step.details}
      </div>
    </div>
  );
};

export default Accordion;
