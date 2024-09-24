'use client';
import React, { useState } from "react";
import styles from "./SkillSection.module.css";
import { useMultiStepForm } from '../../context/MultiStepContext';

const SkillSection = () => {
    const skills = [
        'CSS', 'React', 'Node js', 'Angular', 'Python', 'DevOps',
        'Swift', 'ReactNative', 'Android', 'IOS', 'Java', 'Ruby on Rails',
        'Go', 'Vue JS', 'PHP', 'Machine Learning', 'TypeScript',
        'JavaScript', 'NLP', 'Generative AI', 'LLM', 'Data Science',
        'Others', 'I am not sure'
    ];

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [error, setError] = useState(null)
    const { next, back, progress } = useMultiStepForm();

    const handleSkillClick = (skill) => {
        setSelectedSkills((prevSelected) =>
            prevSelected.includes(skill)
                ? prevSelected.filter((s) => s !== skill)
                : [...prevSelected, skill]
        );
        setError(false)
    };

    const handleNext = () => {
        if (selectedSkills.length > 0) {
            next(); 
        } else {
           setError(prev => !prev)
        }
    };

    const handleBack = () => back();

    return (
        <section className={styles.skillSection}>
            <div className={styles.mainContainer}>
                <div className={styles.navContainer}>
                    <button className={styles.prevButton} onClick={handleBack}>
                        <span>&lt;</span> Previous Question
                    </button>
                    <button className={styles.nextButton}>{progress}% Complete</button>
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
                        {skills.map((label, index) => (
                            <div
                                key={index}
                                className={`${styles.skill} ${selectedSkills.includes(label) ? styles.checked : ''}`}
                                onClick={() => handleSkillClick(label)}
                            >
                                <span>+</span> {label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.continue}>
                    <button className={styles.nextButton} onClick={handleNext}>
                        Continue <span className={styles.continueSpan}>&rarr;</span>
                    </button>
                    {error && <p className={styles.error}>Please select at least one skill</p>}
                </div>
            </div>
            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </section>
    );
};

export default SkillSection;
