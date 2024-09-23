'use client';
import React, { useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [clicked, setClicked] = useState(null);
  const [roles, setRoles] = useState([
    { key: 'frontend', label: 'Front End Developer', active: false },
    { key: 'backend', label: 'Back End Developer', active: false },
    { key: 'fullstack', label: 'Full Stack Developer', active: false },
    { key: 'devops', label: 'DevOps Engineer', active: false },
    { key: 'ai', label: 'AI Engineer', active: false },
    { key: 'data', label: 'Data Scientist', active: false },
    { key: 'qa', label: 'QA Engineer', active: false },
    { key: 'lead', label: 'Lead Engineer', active: false },
  ]);

  const handleClick = (button) => {
    setClicked(button);
  };

  const handleCheckboxClick = (key) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.key === key ? { ...role, active: !role.active } : role
      )
    );
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.headingContainer}>
        <h1 className={styles.mainHeading}>
          Hire the Best Quality Software Developers Fast
        </h1>
        <div className={styles.secondaryHeading}>
          <p>
            Get vetted and quality-assured remote software developers who excel
            in AI and software engineering to optimize performance and deliver
            innovative solutions.
          </p>
          <div className={styles.headingButtons}>
            <button
              className={`${styles.button} ${
                clicked === 'team' ? styles.clicked : ''
              }`}
              onClick={() => handleClick('team')}
            >
              <span>⚡</span>
              Build a Team
            </button>
            <button
              className={`${styles.button} ${
                clicked === 'product' ? styles.clicked : ''
              }`}
              onClick={() => handleClick('product')}
            >
              Build a Product
            </button>
            <button
              className={`${styles.button} ${
                clicked === 'llm' ? styles.clicked : ''
              }`}
              onClick={() => handleClick('llm')}
            >
              LLM Services
            </button>
          </div>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        {roles.map((role) => (
          <button
            key={role.key} // Unique key based on role.key
            className={`${
              role.active ? styles.checkedButton : styles.checkButton
            }`}
            onClick={() => handleCheckboxClick(role.key)}
          >
            {role.label}
          </button>
        ))}
      </div>
      <button className={styles.hireButton}>Request Candidate</button>
    </section>
  );
};

export default HeroSection;
