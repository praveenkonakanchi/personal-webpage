import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Praveen Konakanchi</h1>
      </header>
      <nav className="App-nav">
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <section id="about" className="App-section">
          <h2>About Me</h2>
          <img src="profile-picture-placeholder.png" alt="Praveen Konakanchi" className="profile-picture" />
          <p>
            Hello! I'm Praveen Konakanchi, a passionate UI/React.js developer with over 8 years of experience in
            building user-friendly and responsive web applications. I enjoy mentoring others, continuously learning new
            technologies, and contributing to open-source projects.
          </p>
        </section>
        <section id="portfolio" className="App-section">
          <h2>Portfolio</h2>
          <p>Here are some of my recent projects:</p>
          <ul>
            <li>
              <strong>Project 1:</strong> Description of project 1.
            </li>
            <li>
              <strong>Project 2:</strong> Description of project 2.
            </li>
            <li>
              <strong>Project 3:</strong> Description of project 3.
            </li>
          </ul>
        </section>
        <section id="resume" className="App-section">
          <h2>Resume</h2>
          <p>
            You can download my resume{' '}
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </p>
        </section>
        <section id="blog" className="App-section">
          <h2>Blog</h2>
          <p>Read my latest blog posts:</p>
          <ul>
            <li>
              <a href="#">Blog Post 1</a>
            </li>
            <li>
              <a href="#">Blog Post 2</a>
            </li>
            <li>
              <a href="#">Blog Post 3</a>
            </li>
          </ul>
        </section>
        <section id="contact" className="App-section">
          <h2>Contact</h2>
          <p>You can reach me at:</p>
          <p>
            Email: <a href="mailto:praveenkonakanchi7@gmail.com">praveenkonakanchi7@gmail.com</a>
          </p>
          <p>Phone: +1 (920) 333-3424</p>
          <p>
            LinkedIn:{' '}
            <a href="https://linkedin.com/in/praveenkonakanchi/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/praveenkonakanchi/
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/praveenkonakanchi" target="_blank" rel="noopener noreferrer">
              github.com/praveenkonakanchi
            </a>
          </p>
        </section>
      </main>
      <footer className="App-footer">&copy; 2024 Praveen Konakanchi. All rights reserved.</footer>
    </div>
  );
}

export default App;
