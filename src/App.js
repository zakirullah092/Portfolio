import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header';
import LandingSection from './component/LandingSection/LandingSection';
import Projects from './component/Projects/Projects';
import ContactForm from './component/ContactForm/ContactForm'; // Import ContactForm component
import ScrollToTopButton from './component/ScrollToTopButton/ScrollToTopButton';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <LandingSection />
      <Projects />
      <ContactForm /> {/* Render ContactForm component */}
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />} {/* Render the ScrollToTopButton component */}
    </div>
  );
}

export default App;