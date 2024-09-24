'use client'
import React, { useState } from "react";
import styles from "./SkillSection.module.css";

const SkillSection = () => {
    const skills = ['CSS','React','Node js','Angular','Python','DevOps', 'Swift','ReactNative','Andriod','IOS','Java','Ruby on Rails', 'Go','Vue JS','php','Machine Learning','TypeScript','JavaScript','NLP','Generative AI','LLM','Data Science','Others','Im not sure'
    ]

    const [progressWidth, setProgressWidth] = useState(40);
  return (
    <section className={styles.skillSection}>
      <div className={styles.mainContainer}>
        <div className={styles.navContainer}>
          <button className={styles.prevButton}>
            <span>&lt;</span> Previous Question
          </button>

          <button className={styles.nextButton}>0% Complete</button>
        </div>
        <div className={styles.headingContainer}>
          <h1>What skills would you like to see in your new team?</h1>
          <p>Select the desired areas of expertise</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Desired areas of expertise (e.g., JavaScript, Python, etc.)"
          />
        </div>
        <div className={styles.skills}>
            <h1>Popular skills for <span>Developer:</span></h1>
            <div className={styles.skillSet}>
                {skills.map((label,index)=>(
                <>
                <div key={index} className={styles.skill}><span>+</span> {label}</div>
                </>
                ))}
            </div>
        </div>
        <div className={styles.continue}>
          <button className={styles.nextButton}>Continue <span className={styles.continueSpan}>&rarr;</span></button>
        </div>
      </div>
      <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
    </section>
  );
};

export default SkillSection;
