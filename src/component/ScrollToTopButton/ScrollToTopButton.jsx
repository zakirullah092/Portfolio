import React from 'react';
import './ScrollToTopButton.css';
const ScrollToTopButton = ({ onClick }) => {
  return (
    <button className="scrollTopButton" onClick={onClick}>
      Go to Top
    </button>
  );
};

export default ScrollToTopButton;
