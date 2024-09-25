'use client';
import React from "react";
import styles from "./HireSection.module.css";
import Image from "next/image";
import { useFormData } from "@/context/form-data-context/form-data";

const HireSection = () => {
  const { setQty, next, back, progress } = useFormData();
  
  const handleBack = () => back();
  const handlePanelClick = (label) => {
    setQty(label);
    next();
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
          <div className={styles.panel} onClick={() => handlePanelClick("One Engineer")}>
            <Image 
              src="/images/oneEng.png" 
              width={60} 
              height={60} 
              alt="One engineer icon"
              style={{ width: "60px", height: "auto" }} // Adjust width or height to maintain aspect ratio
            />
            <p>One Engineer</p>
          </div>
          <div className={styles.panel} onClick={() => handlePanelClick("A small team")}>
            <Image 
              src="/images/smallteam.png" 
              width={60} 
              height={60} 
              alt="Small team icon"
              style={{ width: "60px", height: "auto" }} // Adjust width or height to maintain aspect ratio
            />
            <p>A small team</p>
          </div>
          <div className={styles.panel} onClick={() => handlePanelClick("A large team")}>
            <Image 
              src="/images/large-team.png" 
              width={60} 
              height={60} 
              alt="Large team icon"
              style={{ width: "60px", height: "auto" }} // Adjust width or height to maintain aspect ratio
            />
            <p>A large team</p>
          </div>
          <div className={styles.panel} onClick={() => handlePanelClick("I am not sure")}>
            <Image 
              src="/images/not-sure.png" 
              width={60} 
              height={60} 
              alt="Not sure icon"
              style={{ width: "60px", height: "auto" }} // Adjust width or height to maintain aspect ratio
            />
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
