'use client'
import React, { useState } from "react";
import styles from "./HireSection.module.css";
import Image from "next/image";
const HireSection = () => {
  const [progressWidth, setProgressWidth] = useState(20);
  return (
    <section className={styles.hireSection}>
      <div className={styles.mainContainer}>
        <div className={styles.navContainer}>
          <button className={styles.prevButton}>
            <span>&lt;</span> Previous Question
          </button>
          <button className={styles.nextButton}>20% Complete</button>
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
          <div className={styles.panel}>
            <Image src="/images/oneEng.png" width={60} height={60} />
            <p>One Engineer</p>
          </div>
          <div className={styles.panel}>
            <Image src="/images/smallteam.png" width={60} height={60} />
            <p>A small team</p>
          </div>
          <div className={styles.panel}>
            <Image src="/images/large-team.png" width={60} height={60} />
            <p>A large team</p>
          </div>
          <div className={styles.panel}>
            <Image src="/images/not-sure.png" width={60} height={60} />
            <p>I am not sure</p>
          </div>
        </div>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HireSection;
