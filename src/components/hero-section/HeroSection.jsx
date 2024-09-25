"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";
import { useFormData } from "@/context/form-data-context/form-data";

const teamData = [
  { key: "frontend", label: "Front End Developer" },
  { key: "backend", label: "Back End Developer" },
  { key: "fullstack", label: "Full Stack Developer" },
  { key: "devops", label: "DevOps Engineer" },
  { key: "ai", label: "AI Engineer" },
  { key: "data", label: "Data Scientist" },
  { key: "qa", label: "QA Engineer" },
  { key: "lead", label: "Lead Engineer" },
];

const productData = [
  { key: "webapp", label: "Web Application" },
  { key: "mobileapp", label: "Mobile Application" },
  { key: "saas", label: "SaaS Platform" },
  { key: "ecommerce", label: "E-commerce Solution" },
  { key: "dashboard", label: "Data Dashboard" },
  { key: "crm", label: "CRM System" },
  { key: "cms", label: "Content Management System" },
  { key: "api", label: "API Development" },
];

const llmServicesData = [
  { key: "chatbot", label: "Chatbot Development" },
  { key: "summarization", label: "Text Summarization" },
  { key: "translation", label: "Machine Translation" },
  { key: "contentgen", label: "Content Generation" },
  { key: "sentiment", label: "Sentiment Analysis" },
  { key: "questionanswering", label: "Question Answering Systems" },
  { key: "customllm", label: "Custom LLM Solutions" },
];

const HeroSection = () => {
  const { selectedLabel, selectedRoles, setLabelandRoles, next } = useFormData();
  const [clicked, setClicked] = useState(selectedLabel);
  const [activeRoles, setActiveRoles] = useState(selectedRoles);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Update the clicked state based on the selectedLabel from context
    setClicked(selectedLabel);
  }, [selectedLabel]);

  useEffect(() => {
    // Update activeRoles from context on mount
    setActiveRoles(selectedRoles);
  }, [selectedRoles]);

  const handleClick = (button) => {
    setClicked(button);
  };

  const handleCheckboxClick = (label) => {
    setActiveRoles((prevActiveRoles) => {
      if (prevActiveRoles.includes(label)) {
        return prevActiveRoles.filter((role) => role !== label); // Remove the role
      } else {
        return [...prevActiveRoles, label]; // Add the role
      }
    });
    setError(false); // Reset error state on checkbox click
  };

  const isAnyCheckboxActive = activeRoles.length > 0;

  const handleNext = () => {
    if (isAnyCheckboxActive) {
      setLabelandRoles(clicked, activeRoles); // Use activeRoles (array of labels) here
      next();
    } else {
      setError(true);
    }
  };

  const roles = clicked === "team" ? teamData : clicked === "product" ? productData : llmServicesData;

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
              className={`${styles.button} ${clicked === "team" ? styles.clicked : ""}`}
              onClick={() => handleClick("team")}
            >
              <span>⚡</span> Build a Team
            </button>
            <button
              className={`${styles.button} ${clicked === "product" ? styles.clicked : ""}`}
              onClick={() => handleClick("product")}
            >
              Build a Product
            </button>
            <button
              className={`${styles.button} ${clicked === "llm" ? styles.clicked : ""}`}
              onClick={() => handleClick("llm")}
            >
              LLM Services
            </button>
          </div>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        {roles.map((role) => (
          <div
            key={role.key}
            className={`${activeRoles.includes(role.label) ? styles.checkedButton : styles.checkButton}`}
            onClick={() => handleCheckboxClick(role.label)}
          >
            {role.label}
          </div>
        ))}
      </div>
      <div className={styles.next}>
        <button className={styles.hireButton} onClick={handleNext}>
          Request Candidate
        </button>
        {error && (
          <p className={styles.error}>Please select at least one checkbox</p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
