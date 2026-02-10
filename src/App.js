import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  // user data - in real app this would come from API
  const [userData] = useState({
    name: "Rani",
    bio: "I am a Frontend Developer learning React and modern web technologies. I focus on building clean, responsive, and user-friendly web interfaces.",
    email: "raniachheylal24@navgurukul.org",
    phone: "9311831213",
    image: "https://github.com/Rani52057kumari.png"
  });

  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Profile userData={userData} />
        <Skills skillsList={skills} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
