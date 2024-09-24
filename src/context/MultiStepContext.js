import { createContext, useContext, useState } from 'react';
import HeroSection from '../components/hero-section/HeroSection';
import SkillSection from '../components/skills-section/SkillSection';
import HireSection from '../components/hire-section/HireSection';
import JoiningSection from '../components/joining-section/JoiningSection';

// Create the context
const MultiStepContext = createContext();

export const useMultiStepForm = () => useContext(MultiStepContext);

// Create the provider component
export const MultiStepProvider = ({ children }) => {
  const steps = [<HeroSection />, <SkillSection />, <HireSection />, <JoiningSection />];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  const value = {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
  };

  return (
    <MultiStepContext.Provider value={value}>
      {children}
    </MultiStepContext.Provider>
  );
};
