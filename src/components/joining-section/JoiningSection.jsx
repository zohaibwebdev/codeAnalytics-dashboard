import React from "react";
import styles from "./JoiningSection.module.css";
import Image from "next/image";
const JoiningSection = () => {
  return (
    <section className={styles.joiningSection}>
      <div className={styles.mainContainer}>
        <div className={styles.navContainer}>
          <button className={styles.prevButton}>
            <span>&lt;</span> Previous Question
          </button>
          <button className={styles.nextButton}>40% Complete</button>
        </div>
        <div className={styles.headingContainer}>
            <h1>When do you need the developer to start?</h1>
            <p>Decide when you will start your project together!</p>
        </div>
      </div>
      <div className={styles.joiningDiv}>
        <div className={styles.panel}>
            <Image src='/images/immediatly.png' width={60} height={60}/>
            <p>Immediately</p>
        </div>
        <div className={styles.panel}>
            <Image src='/images/in-1-week.png' width={60} height={60}/>
            <p>In 1 to 2 weeks</p>
        </div>
        <div className={styles.panel}>
            <Image src='/images/2-weeks.png' width={60} height={60}/>
            <p>&gt; 2 weeks from now</p>
        </div>
        <div className={styles.panel}>
            <Image src='/images/not-sure.png' width={60} height={60}/>
            <p>I am not sure</p>
        </div>
      </div>
    </section>
  );
};

export default JoiningSection;
