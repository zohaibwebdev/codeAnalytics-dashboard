'use client';
import React, { useEffect, useState } from "react";
import styles from "./SkillSection.module.css";
import { useFormData } from "@/context/form-data-context/form-data";

const SkillSection = () => {
    const { setSkills, next, back, progress, selectedSkills } = useFormData();
    const skills = [
        'CSS', 'React', 'Node js', 'Angular', 'Python', 'DevOps',
        'Swift', 'ReactNative', 'Android', 'IOS', 'Java', 'Ruby on Rails',
        'Go', 'Vue JS', 'PHP', 'Machine Learning', 'TypeScript',
        'JavaScript', 'NLP', 'Generative AI', 'LLM', 'Data Science',
        'Others', 'I am not sure'
    ];

    const [selected, setSelected] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Set the selected skills based on the selectedSkills from context
        setSelected(selectedSkills);
    }, [selectedSkills]);

    const handleSkillClick = (skill) => {
        setSelected((prevSelected) =>
            prevSelected.includes(skill)
                ? prevSelected.filter((s) => s !== skill)
                : [...prevSelected, skill]
        );
        setError(false);
    };

    const handleNext = () => {
        if (selected.length > 0) {
            setSkills(selected);
            next(); 
        } else {
            setError(true);
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
                                className={`${styles.skill} ${selected.includes(label) ? styles.checked : ''}`}
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
