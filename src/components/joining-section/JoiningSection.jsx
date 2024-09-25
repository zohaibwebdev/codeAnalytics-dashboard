"use client";
import React, { useState } from "react";
import styles from "./JoiningSection.module.css";
import Image from "next/image";
import { useFormData } from "@/context/form-data-context/form-data";

const JoiningSection = () => {
  const { setJoining, next, back, progress } = useFormData(); 

 
  const handlePanelClick = (label) => {
    setJoining(label); 
    next();
  };

  const handleBack = () => back();

  return (
    <section className={styles.joiningSection}>
      <div className={styles.mainContainer}>
        <div className={styles.navContainer}>
          <button className={styles.prevButton} onClick={handleBack}>
            <span>&lt;</span> Previous Question
          </button>
          <button className={styles.nextButton}>{progress}% Complete</button>
        </div>
        <div className={styles.headingContainer}>
          <h1>When do you need the developer to start?</h1>
          <p>Decide when you will start your project together!</p>
        </div>
      </div>
      <div className={styles.spacer}>
        <div className={styles.joiningDiv}>
          <div className={styles.panel} onClick={() => handlePanelClick("Immediately")}>
            <Image 
              src="/images/immediatly.png" 
              width={60} 
              height={60} 
              alt="Immediately icon"
            />
            <p>Immediately</p>
          </div>
          <div className={styles.panel} onClick={() => handlePanelClick("In 1 to 2 weeks")}>
            <Image 
              src="/images/in-1-week.png" 
              width={60} 
              height={60} 
              alt="In 1 to 2 weeks icon"
            />
            <p>In 1 to 2 weeks</p>
          </div>
          <div className={styles.panel} onClick={() => handlePanelClick("> 2 weeks from now")}>
            <Image 
              src="/images/2-weeks.png" 
              width={60} 
              height={60} 
              alt="More than 2 weeks icon"
            />
            <p>&gt; 2 weeks from now</p>
          </div>
          <div className={styles.panel} onClick={() => handlePanelClick("I am not sure")}>
            <Image 
              src="/images/not-sure.png" 
              width={60} 
              height={60} 
              alt="Not sure icon"
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

export default JoiningSection;
