'use client';
import React, { useState } from "react";
import styles from "./HireSection.module.css";
import Image from "next/image";
import { useMultiStepForm } from '../../context/MultiStepContext';

const HireSection = () => {
  const { next, back, progress } = useMultiStepForm();
  const handleNext = () => next();
  const handleBack = () => back();
  
  const handlePanelClick = () => {
    handleNext(); 
  };

  return (
    <section className={styles.hireSection}>
      <div className={styles.mainContainer}>
        <div className={styles.navContainer}>
          <button className={styles.prevButton} onClick={handleBack}>
            <span>&lt;</span> Previous Question
          </button>
          <button className={styles.nextButton}><span>{progress}%</span> Complete</button>
        </div>
        <div className={styles.headingContainer}>
          <h1>How many team members do you require?</h1>
          <p>
            We have <span>25+</span> engineers matching your criteria!
          </p>
        </div>
      </div>
      <div className={styles.spacer}>
        <div className={styles.hireDiv}>
          <div className={styles.panel} onClick={handlePanelClick}>
            <Image src="/images/oneEng.png" width={60} height={60} />
            <p>One Engineer</p>
          </div>
          <div className={styles.panel} onClick={handlePanelClick}>
            <Image src="/images/smallteam.png" width={60} height={60} />
            <p>A small team</p>
          </div>
          <div className={styles.panel} onClick={handlePanelClick}>
            <Image src="/images/large-team.png" width={60} height={60} />
            <p>A large team</p>
          </div>
          <div className={styles.panel} onClick={handlePanelClick}>
            <Image src="/images/not-sure.png" width={60} height={60} />
            <p>I am not sure</p>
          </div>
        </div>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HireSection;
