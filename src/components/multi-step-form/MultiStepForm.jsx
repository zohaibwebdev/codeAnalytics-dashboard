import { useFormData } from '@/context/form-data-context/form-data';
import React from 'react';

const MultiStepWrapper = () => {
  const { currentStep } = useFormData(); 

  return (
    <>
      {currentStep}
    </>
  );
};

export default MultiStepWrapper;
