"use client";
import React from "react";
import FormDataContainer from '../context/form-data-context/form-data-container'
import MultiStepForm from "../components/multi-step-form/MultiStepForm";

const Homepage = () => {
  return (
    <FormDataContainer>
      <MultiStepForm />
    </FormDataContainer>
  );
};

export default Homepage;
