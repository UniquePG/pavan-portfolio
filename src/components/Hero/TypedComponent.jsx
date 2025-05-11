import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'React/NextJS Expert',
        'Node/Express Developer',
        'Full Stack Developer',
        'Product Development Expert',
        'UI/UX Enthusiast',
        'Real World Problem Solver',
        'Software Engineer Not Just a Coder',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
      showCursor: true,
      autoInsertCss: true
    };

    // Initialize Typed
    typed.current = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance on unmounting to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="typed-text"></span>;
};

export default TypedComponent;