import React from 'react';
import { Stack, VStack, HStack, Box } from '@chakra-ui/react';
import './Header.css';

export default function Header() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='headerFile'>
      <ul className='headerUl'>
        <li> <a href="https://www.facebook.com/people/Zakir-Ullah/100053820453488/" target="_blank" rel="noopener noreferrer">Facebook</a> </li>
        <li> <a href="https://www.linkedin.com/in/zakir-ullah-549a07272/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BSYWt7ZDORIC5EWEMCKrjCw%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a> </li>
        <li> <a href="https://cssbattle.dev/player/zakir" target="_blank" rel="noopener noreferrer">CSS Battle </a> </li>
        <li> <a href="#projects-section" onClick={() => handleScrollToSection('projects-section')}>Projects</a> </li>
        <li> <a href="#contactme-section" onClick={() => handleScrollToSection('contactme-section')}>Contact Me</a> </li>
      </ul>
    </div>
  );
}
