import React, { useState } from 'react';
import ReactGA from 'react-ga4';

const Accordion = (props) => {
  const flow = props.data;
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeNestedIndices, setActiveNestedIndices] = useState({});

  const toggleAccordion = (index, nestedIndex) => {
    if (nestedIndex !== undefined) {
      setActiveNestedIndices({
        ...activeNestedIndices,
        [index]: activeNestedIndices[index] === nestedIndex ? null : nestedIndex,
      });
    } else {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const isExpanded = (index, nestedIndex) => {
    if (nestedIndex !== undefined) {
      return activeNestedIndices[index] === nestedIndex ? 'rotate-180' : '';
    } else {
      return activeIndex === index ? 'rotate-180' : '';
    }
  };


  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {flow.map((blog) => (
        <div key={blog.id}>
          <h2 id={`accordion-collapse-heading-${blog.id}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200  focus:ring-2 focus:ring-gray-100 hover:bg-red-200 gap-3 ${
                activeIndex === blog.id ? 'active' : ''
              }`}
              onClick={() => toggleAccordion(blog.id)}
              aria-expanded={activeIndex === blog.id ? 'true' : 'false'}
              aria-controls={`accordion-collapse-body-${blog.id}`}
            >
              <span>{blog.name}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transform transition-transform delay-100 ${isExpanded(
                  blog.id
                )}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${blog.id}`}
            className={`p-5 border border-b-0 border-gray-200 bg-gray-100  ${
              activeIndex === blog.id ? 'block' : 'hidden'
            }`}
            aria-labelledby={`accordion-collapse-heading-${blog.id}`}
          >
            
            <div>
          <audio style={{'display':'inline'}} onPlay={()=>
              {
                  ReactGA.send({ hitType: 'event', eventCategory: 'Media', eventAction: 'Play', eventLabel: 'Play Audio' , fileName: blog.name , eventValue: 2});
                  console.log('Audio Played');
                 } } controls>
                  
              <source src={blog.link} type={blog.type} />
          </audio>
                           
          <a href={blog.link} download={"ManusathHanda-Audio "+blog.name} onClick={()=>ReactGA.send({ hitType: 'event', eventCategory: 'Download', eventAction: 'Click', eventLabel: 'Download Audio' , fileName: blog.name , eventValue: 1})} style={{'display':'inline'}} target="_blank">
              Download
          </a>

          </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
