import React from 'react';
import { MultiStepProvider, useMultiStepForm } from '../../context/MultiStepContext';

const MultiStepForm = () => {
  const { step } = useMultiStepForm(); 
  return (
    <>
      {step}
    </>
  );
};

const MultiStepWrapper = () => (
  <MultiStepProvider>
    <MultiStepForm />
  </MultiStepProvider>
);

export default MultiStepWrapper;
