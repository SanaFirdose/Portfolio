
import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSunMoon } from "react-icons/lu";

import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
// import { MdWavingHand } from "react-icons/md";


import "./App.css";
import { AboutMe, Contact, Experience, Footer, Projects } from "./component/home";

function App() {
  const [theme, setTheme] = useState("dark"); // Theme: "light" or "dark"
  const [activeSection, setActiveSection] = useState("home"); // Active section
  const [isManualScroll, setIsManualScroll] = useState(false); // Flag for manual navigation

  // Effect to update active section based on scrolling
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isManualScroll) {
          // Only update activeSection if not manually scrolling
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id); // Update the active section based on visibility
            }
          });
        }
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isManualScroll]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Handle manual navigation click
  const handleNavClick = (section) => {
    setIsManualScroll(true); // Set manual scroll flag
    setActiveSection(section); // Set the clicked section as active
    document.getElementById(section).scrollIntoView({ behavior: "smooth" }); // Scroll to the section

    // Reset the flag after scrolling
    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000); // Timeout allows smooth scrolling to finish
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    // link.href = "https://drive.google.com/uc?export=download&id=1qTbyES6Zh2uv1j0mxX4hcpEwPnFBN0Qd"; // Google Drive link
    link.href = "https://drive.google.com/file/d/1slG8UZr7MeibYQRy9wS8kpMQFiT82swJ/view";
    link.download = "sana-mernFullstack.pdf"; // Desired file name
    link.click(); // Trigger download
  };

  return (
    <>
      <div className="app">
        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <a
            href="#home"
            className={`nav-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("home")}
          >
            <FiHome />
          </a>
          <a
            href="#about"
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            <FaRegUser />
          </a>
          <a
            href="#experience"
            className={`nav-item ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => handleNavClick("experience")}
          >
            <FaBook />
          </a>
          <a
            href="#projects"
            className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => handleNavClick("projects")}
          >
            <FaBriefcase />
          </a>
          <a
            href="#contact"
            className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >
            <RiMessage2Line />
          </a>
        </nav>
      </div>

      <div id="home" className={`portfolio ${theme}`}>
        <header className="header">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? <LuSunMoon /> : <FiMoon />}
          </button>
        </header>

<main className="main home-layout">
  <div className="text-container">
    <h2 style={{ color: "gray", fontSize: "30px", fontFamily: "monospace" }}>
      Hey,there 👋
    </h2>
    <h1
      style={{
        color: theme === "light" ? "#5299c6" : "#5299c6",
        fontSize: "60px",
      }}
    >
      <span
        style={{
          color: theme === "light" ? "#0b283a" : "#ffffff",
          fontSize: "50px",
        }}
      >
        I'm
      </span>{" "}
      Sana Firdose <br />
      <span
        style={{
          color: theme === "light" ? "#0b283a" : "#ffffff",
          fontSize: "50px",
        }}
      >
        a Full-Stack Developer
      </span>
    </h1>
    <h3
      style={{
        color: "gray",
        fontFamily: "serif",
        fontSize: "30px",
      }}
    >
      currently focused on building user <br /> experiences that drive growth.
    </h3>
    <div className="buttons">
    <button className="btn" onClick={handleDownloadCV}>
                Download CV
    </button>
      {/* <button className="btn"> */}
        <a style={{border:theme === "light" ? "2px solid black" : "2px solid white" , color: theme === "light" ? "#0b283a" : "#ffffff", textDecoration:'none'}}
          href="https://www.linkedin.com/in/sana-firdose-646115289/"
          className="btn secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin <FaLinkedin />
        </a>
      {/* </button> */}
    </div>
  </div>
  <div className="image-container">
  <img
      src="./Black and Blue Initials Creative Logo (2).png"
      
      alt="avatar"
      className="avatar"
    />
  {/* <img
      src="https://media.istockphoto.com/id/1202077152/photo/digital-crime-by-an-anonymous-hacker.jpg?s=612x612&w=0&k=20&c=CwSIY8RP5PNDHXpQ1b6b6JGkosLJmzMBVMTcReCs7AA="
      
      alt="avatar"
      className="avatar"
    /> */}
      {/* <img
      src="https://media.istockphoto.com/id/2195431482/photo/computer-hacker-stealing-data-from-a-laptop.jpg?s=612x612&w=0&k=20&c=_XlUqSy4rLMK08ZOzNq1JyZZTzLBOvTueBEScp9rQXI="
      
      alt="avatar"
      className="avatar"
    /> */}
    {/* <img
      src="https://www.paceinstitute.lk/blog/2024/may/images/blog/dreaming-about-becoming-a-fullstack-web-developer.png"
      
      alt="avatar"
      className="avatar"
    /> */}
    {/* <img
      src="https://img.freepik.com/premium-photo/anime-girl-black-hoodie_666745-4494.jpg"
      
      alt="avatar"
      className="avatar"
    /> */}
     {/* <img
      src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/977b2955-9304-4900-852f-a7baea8f349b/c26b99db-3a38-4980-99c5-eb15fc962acb.png"
      
      alt="avatar"
      className="avatar"
    /> */}
     {/* <img
      src="https://i.pinimg.com/564x/d5/7b/cd/d57bcda58aa8ab482ff7aa84933aa894.jpg"
      
      alt="avatar"
      className="avatar"
    /> */}
    {/* <img
      src="https://img.freepik.com/premium-photo/anime-girl-with-baseball-cap-baseball-uniform-posing-picture-generative-ai_958192-23887.jpg"
      
      alt="avatar"
      className="avatar"
    /> */}
    {/* <img
      src="https://img.freepik.com/premium-photo/anime-girl-with-long-hair-wearing-baseball-cap-red-white-outfit-generative-ai_958192-23976.jpg"
      
      alt="avatar"
      className="avatar"
    /> */}
  </div>
</main>


        <footer className="footer">
          
        </footer>
      </div>

      {/* Main Sections */}
      <AboutMe theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme}/>
      <Contact theme={theme} />
      <Footer/>
    </>
  );
}

export default App;
