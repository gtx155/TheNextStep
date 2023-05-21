import React, { useState, useEffect } from 'react';
import './GoToTopButton.css'; // Create a CSS file for styling

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add event listener to track scrolling
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup by removing event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check scroll position to show/hide button
    const { scrollTop } = document.documentElement || document.body;
    setShowButton(scrollTop > 600); // Show button when scrolled down 100px or more
  };

  const scrollToTop = () => {
    // Scroll to top when button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  return (
    <button className={`go-to-top-button border-gradient border-gradient-purple only-bottom ${showButton ? 'visible' : ''}`} onClick={scrollToTop}>
      <span>⇧</span> {/* Add an icon of your choice */}
    </button>
  );
};

export default GoToTopButton;
