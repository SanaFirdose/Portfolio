
import { useEffect, useState } from "react";
import "./home.css";

// About Me Component
export function AboutMe({ theme }) {
  // Define styles for light and dark themes
  const styles = {
    container: {
      backgroundColor: theme === "light" ? "white" : "#0b283a",
      color: theme === "light" ? "#0b283a" : "white",
      padding: "20px",
      borderRadius: "10px",
    },
    heading: {
      color: theme === "light" ? "#0b283a" : "#80d4ff",
    },
    paragraph: {
      color: theme === "light" ? "#0b283a" : "#ffffff",
    },
  };

  return (
    <div id="about" className="sectionAbout" style={styles.container}>
      <h2 className="heading1" style={styles.heading}>
        Passionate Full Stack Developer | MERN Stack Specialist
      </h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p style={styles.paragraph}>
              As a dedicated Full Stack Developer with over a year of hands-on
              experience, I thrive on building dynamic, user-friendly web
              applications. Specializing in the MERN stack (MongoDB, Express.js,
              React.js, Node.js), I excel at creating seamless front-end
              experiences paired with powerful and scalable back-end systems.
              <br />
              I have a strong command of backend development, RESTful APIs, and
              secure authentication mechanisms, ensuring applications are both
              functional and secure. Crafting intuitive user interfaces and
              delivering efficient solutions is at the heart of my work. <br />
              With a commitment to continuous learning and innovation, I’m
              always exploring emerging technologies to enhance my expertise.
              Based in Nanded and open to relocating anywhere for exciting
              opportunities and collaborative projects.
            </p>
            <button id="" className="contact1">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




// Experience Component
export function Experience({ theme }) {
  const styles = {
    container: {
      backgroundColor: theme === "dark" ? "#0b283a" : "#ffffff",
      color: theme === "dark" ? "#ffffff" : "#0b283a",
      padding: "20px",
      minHeight: "85vh",
    },
    card: {
      background: theme === "dark" ? "#1c3b50" : "#f5f5f5",
      color: theme === "dark" ? "#ffffff" : "#0b283a",
      borderRadius: "20px",
      padding: "20px",
      marginBottom: "20px",
      borderBottom: theme === "dark" ? "2px solid #ffffff" : "2px solid #0b283a",
      flex: 1, // Ensure both divs grow equally
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Center content vertically
    },
    roundedCard: {
      borderRadius: "20px 0 0 20px", // Left rounded corner
      marginRight: "10px",
    },
    roundedCardRight: {
      borderRadius: "0 20px 20px 0", // Right rounded corner
      marginLeft: "10px",
    },
  };

  return (
    <div id="experience" className="section" style={styles.container}>
      <h1 className="experience-heading">My Experience</h1>
      <p style={{ color: 'gray' }}>Here is my professional journey and skill set.</p>
      <div className="skills-container">
        {/* Frontend Skills */}
        <div
          className="skills-card frontend-skills"
          style={{ ...styles.card, ...styles.roundedCard }}
        >
          <h2 style={{ color: theme === "dark" ? "#ffffff" : "#0b283a" }}>Frontend Skills</h2>
          <p>
            HTML5 | CSS3 | JavaScript (ES6+) | React.js | Next.js | Responsive
            Design | Bootstrap | Tailwind CSS | Redux | Redux Toolkit | React Hook
            Form | Git / GitHub
          </p>
        </div>

        {/* Backend Skills */}
        <div
          className="skills-card backend-skills"
          style={{ ...styles.card, ...styles.roundedCardRight }}
        >
          <h2 style={{ color: theme === "dark" ? "#ffffff" : "#0b283a" }}>Backend Skills</h2>
          <p>
            Node.js | Express.js | MongoDB | AWS | RESTful APIs | Authentication &
            Authorization | Database Optimization
          </p>
        </div>
      </div>
    </div>
  );
}






export function Projects({ theme }) {
  // Set the background color of the body depending on the theme
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "#0b283a";
  }, [theme]);

  const projects = [
    {
      name: "Dashboard Design",
      url: "https://codewithsadee.github.io/anon-ecommerce-website/",
      imageUrl: "ec.png",
      para:"(Online shopping platform)"
    },
    {
      name: "Softcadia",
      url: "https://example.com/tekisky-portal",
      imageUrl: "soft.png",
      para:"(Job portal for candidates & employers)"
    },
    {
      name: "Tekisky Mart",
      url: "https://www.tekiskymart.com/",
      imageUrl: "mart.png",
      para:"(An E-Commerce Project)"
    },
    {
      name: "Fitness club",
      url: "https://example.com/ecommerce",
      imageUrl: "gym.png",
      para:"(Gym and fitness membership website)"
    },
    {
      name: "MMH (Muslim Medical Help)",
      url: "https://mmh.tekisky.com/",
      imageUrl: "./mmh1.png",
      para:"(Healthcare assistance portal for patients)"
    },
    {
      name: "Tomato",
      url: "https://example.com/ecommerce",
      imageUrl: "Food.jpg",
      para:"(Food delivery app)"
    },
  ];

  return (
    <div id="projects" className={theme === "light" ? "light-mode" : "dark-mode"}>
      <p style={{ color: theme === "light" ? "gray" : "gray" }}>My Portfolio</p>
      <h1 style={{ color: theme === "light" ? "#80d4ff" : "#80d4ff" }}>Recent Works</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={`${project.name} screenshot`} />
              <div
                className="project-info"
                style={{
                  backgroundColor: theme === "light" ? "#ffffff" : "#0b283a",
                }}
              >
                <h2 style={{ color: theme === "light" ? "#0b283a" : "#ffffff" }}>
                  {project.name}
                </h2>
                <p style={{ color: theme === "light" ? "#0b283a" : "#ffffff" }} >{project.para}</p>
                <p style={{ color: theme === "light" ? "#0b283a" : "#ffffff" }}>
                  Demo ➜
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



export const Contact = ({ theme }) => {


  const isLightMode = theme === "light";

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div
      id="contact"
      className="contact-container"
      style={{
        backgroundColor: isLightMode ? "#ffffff" : "#0b283a",
        color: isLightMode ? "#000" : "#fff",
      }}
    >
      <div className="contact-wrapper">
        <h1
          className="contact-title"
          style={{ color: isLightMode ? "#80d4ff" : "#80d4ff" }}
        >
          Get in touch
        </h1>
        <div className="contact-grid">
          {/* Left Section */}
          <div className="contact-left">
            <h2
              className="contact-subtitle"
              style={{ color: isLightMode ? "gray" : "gray" }}
            >
              Let's talk
            </h2>
            <div
              className="contact-card"
              style={{
                backgroundColor: isLightMode ? "#fff" : "#0b283a",
                borderColor: isLightMode ? "gray" : "gray",
              }}
            >
              <h3 style={{ color: isLightMode ? "#0b283a" : "#ffffff" }}>Email</h3>
              <a href="mailto: sanafirdos.fs@gmail.com" style={{textDecoration:"none"}}><p style={{ color: isLightMode ? "#0b283a" : "#ffffff" }}>
                sanafirdos.fs@gmail.com
              </p></a>
              <a
                href="mailto:sanafirdos.fs@gmail.com"
                className="contact-link"
                style={{ color: isLightMode ? "gray" : "gray" }}
              >
                Write Me →
              </a>
            </div>
            <div
              className="contact-card"
              style={{
                backgroundColor: isLightMode ? "#fff" : "#0b283a",
                borderColor: isLightMode ? "gray" : "gray",
                color: isLightMode ? "#000" : "#fff",
              }}
            >
              <h3 style={{ color: isLightMode ? "#0b283a" : "#ffffff" }}>Whatsapp</h3>
              <p style={{ color: isLightMode ? "#0b283a" : "#ffffff" }}>
                +91 8149433368
              </p>
              <a
                href="https://wa.me/send?phone=918149433368&text=hello"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{ color: isLightMode ? "gray" : "gray" }}
              >
                Write Me →
              </a>
            </div>
            <div
              className="contact-card"
              style={{
                backgroundColor: isLightMode ? "#fff" : "#0b283a",
                borderColor: isLightMode ? "gray" : "gray",
                color: isLightMode ? "#000" : "#fff",
              }}
            >
              <h3 style={{ color: isLightMode ? "#0b283a" : "#ffffff" }}>
                Instagram
              </h3>
              <p style={{ color: isLightMode ? "#0b283a" : "#ffffff" }}>
                sana_firdos22
              </p>
              <a
                href="https://instagram.com/sana_firdos22"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{ color: isLightMode ? "gray" : "gray" }}
              >
                Write Me →
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <h2
              className="contact-subtitle"
              style={{ color: isLightMode ? "gray" : "gray" }}
            >
              Write Me your Message
            </h2>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{ color: isLightMode ? "#0b283a" : "#fff" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"

                  placeholder="Enter name"
                  style={{
                    backgroundColor: isLightMode ? "#fff" : "#27293d",
                    color: isLightMode ? "#000" : "#fff",
                    border: isLightMode ? "1px solid gray" : "none",
                  }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="email"
                  style={{ color: isLightMode ? "#0b283a" : "#fff" }}
                >
                  Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"

                  placeholder="Enter email"
                  style={{
                    backgroundColor: isLightMode ? "#fff" : "#27293d",
                    color: isLightMode ? "#000" : "#fff",
                    border: isLightMode ? "1px solid gray" : "none",
                  }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="message"
                  style={{ color: isLightMode ? "#0b283a" : "#fff" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"

                  placeholder="Write your Message"
                  style={{
                    backgroundColor: isLightMode ? "#fff" : "#27293d",
                    color: isLightMode ? "#000" : "#fff",
                    border: isLightMode ? "1px solid gray" : "none",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="contact-button"
                style={{
                  background: isLightMode
                    ? "linear-gradient(135deg, #5299c6, #e0e0e0)"
                    : "linear-gradient(135deg, #5299c6, #0b283a)",
                }}
              >
                Send Message
              </button>
            </form>
            {/* {status && <p style={{ color: isLightMode ? "#000" : "#fff" }}>{status}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};




export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Brand Section */}
        <div className="brand">
          <h1>Sana Firdose</h1>
        </div>

        {/* Navbar Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <p style={{ marginTop: '50px', fontSize: '14px' }}>
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};
