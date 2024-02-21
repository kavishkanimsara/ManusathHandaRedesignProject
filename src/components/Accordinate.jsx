import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const isExpanded = (index) => {
    return activeIndex === index ? 'rotate-180' : '';
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
          aria-expanded={activeIndex === 0 ? 'true' : 'false'}
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transform transition-transform ${isExpanded(0)}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${activeIndex === 0 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="mb-2 text-gray-500 dark:text-gray-400">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, neque adipisci, magni alias cupiditate corporis dolore debitis ab, ipsam pariatur non veniam quaerat hic aperiam? Praesentium porro doloremque omnis iste?
        </div>
       
      </div>
    </div>
  );
};

export default Accordion;
