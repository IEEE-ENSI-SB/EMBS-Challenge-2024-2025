import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import How from '../Components/How';
import Breath from '../Components/Breath';
import SearchTherapist from '../Components/SearchTherapist';
import EnterChatbot from '../Components/EnterChatbot';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'; // Import the Navbar component

function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);  // Initial opacity is 1 (full opacity)

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 100px, show the navbar
      if (window.scrollY > 300) {
        setShowNavbar(true);
        setNavbarOpacity(0.7);  // Change opacity on scroll
      } else {
        setShowNavbar(false);
        setNavbarOpacity(1);  // Set full opacity when at the top
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      {showNavbar && <Navbar navbarOpacity={navbarOpacity} />} {/* Pass navbarOpacity as prop */}
      <How />
      <SearchTherapist />
      <Breath />
      <EnterChatbot />
      <Footer />
    </div>
  );
}

export default Home;
