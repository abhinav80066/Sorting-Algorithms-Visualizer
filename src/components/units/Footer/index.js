import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/abhinav-chaudhary-04b857192/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Abhinav Chaudhary, Chetan Chauhan, Damini Pandey, Pranjal Gupta.
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://github.com/abhinav80066/Sorting-Algorithms-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;