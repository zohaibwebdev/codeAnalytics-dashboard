import React, { useState } from "react";
import { FormDataProvider } from "./form-data";
import HeroSection from "@/components/hero-section/HeroSection";
import SkillSection from "@/components/skills-section/SkillSection";
import JoiningSection from "@/components/joining-section/JoiningSection";
import HireSection from "@/components/hire-section/HireSection";

const FormDataContainer = ({ children }) => {
  const steps = [
    <HeroSection />,
    <SkillSection />,
    <HireSection />,
    <JoiningSection />,
  ];

  const [state, setState] = useState({
    currentStepIndex: 1,
    selectedLabel: "team",
    selectedRoles: [],
    selectedSkills: [],
    hiringQty: "",
    joining: "",
  });

  const next = () => {
    setState((prev) => ({
      ...prev,
      currentStepIndex: Math.min(prev.currentStepIndex + 1, steps.length - 1),
    }));
  };

  const back = () => {
    setState((prev) => ({
      ...prev,
      currentStepIndex: Math.max(prev.currentStepIndex - 1, 0),
    }));
  };

  const progress = Math.round((state.currentStepIndex / (steps.length - 1)) * 100);

  const currentStep = steps[state.currentStepIndex];

  const setLabelandRoles = (label, roles) => {
    setState((prev) => ({
      ...prev,
      selectedLabel: label,
      selectedRoles: roles,
    }));
  };

  const setSkills = (selectedSkillSet) => {
    setState((prev) => ({
      ...prev,
      selectedSkills: selectedSkillSet,
    }));
  };

  const setQty = (qty) => {
    setState((prev) => ({
      ...prev,
      hiringQty: qty,
    }));
  };

  const setJoining = (joining) => {
    setState((prev) => ({
      ...prev,
      joining,
    }));
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('main state--> ', state);
  }

  return (
    <FormDataProvider
      value={{
        ...state,
        currentStep, 
        setLabelandRoles,
        setSkills,
        setQty,
        setJoining,
        next,
        back,
        progress,
      }}
    >
      {children}
    </FormDataProvider>
  );
};

export default FormDataContainer;
