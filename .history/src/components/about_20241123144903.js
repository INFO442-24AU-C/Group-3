/* About.css */

.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #FFFFFF;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
  color: #1E1E1E;
}

.highlight {
  color: #007BFF;
  font-style: italic;
}

.mission {
  margin-bottom: 40px;
}

.mission h2 {
  font-size: 1.75em;
  margin-bottom: 10px;
  color: #1E1E1E;
}

.mission p {
  font-size: 1.2em;
  color: #555;
}

.link {
  color: #007BFF;
  text-decoration: underline;
}

.letter-grades {
  margin-bottom: 40px;
}

.letter-grades h2 {
  font-size: 1.75em;
  margin-bottom: 10px;
  color: #1E1E1E;
}

.letter-grades p {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #555;
}

.grades {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.grade {
  font-size: 1.5em;
  font-weight: bold;
  color: #1E1E1E;
}

.grade-scale {
  position: relative;
  height: 20px;
  background: linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722);
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
}

.grade-factors {
  list-style-type: decimal;
  padding-left: 20px;
}

.grade-factors li {
  font-size: 1.1em;
  margin-bottom: 10px;
  color: #555;
}

/* About.js */

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="title">What Are You <span className="highlight">Really</span> Agreeing To?</h1>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Know Your Terms sets out to help you better understand the fine print in digital agreements.
          We believe in <strong>transparency</strong> and <strong>accessibility</strong>, so we analyze and grade website Terms of Service agreements
          based on factors like <a href="#" className="link">12345</a>.
        </p>
      </section>

      <section className="letter-grades">
        <h2>Letter Grades</h2>
        <p>
          Our letter-grade system provides a quick, clear indication of how well a site respects your digital rights,
          helping you make informed choices.
        </p>
        <div className="grade-scale"></div>
        <div className="grades">
          <span className="grade">A+</span>
          <span className="grade">B</span>
          <span className="grade">C</span>
          <span className="grade">D</span>
          <span className="grade">F</span>
        </div>
        <p>
          This grade system is determined by five characteristics in the evaluated terms of agreement.
        </p>
        <ul className="grade-factors">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </section>
    </div>
  );
}

export default About;