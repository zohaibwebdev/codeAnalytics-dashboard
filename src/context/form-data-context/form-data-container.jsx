import React, { useState } from "react";
import { FormDataProvider } from "./form-data";

const FormDataContainer = ({ children }) => {
  const [state, setState] = useState({
    selectedLabel: "",
    selectedRoles: [],
    selectedSkills: [],
    hiringQty: "",
    joining: "",
  });

  const setLabelandRoles = (label, roles) => {
    setState(function (prev) {
      return {
        ...prev,
        selectedLabel: label,
        selectedRoles: roles,
      };
    });
  };

  const setSkills = (selectedskillSet) => {
    setState(function (prev) {
      return {
        ...prev,
        selectedSkills: selectedskillSet,
      };
    });
  };
  const setQty = (qty) => {
    setState(function (prev) {
      return {
        ...prev,
        hiringQty: qty,
      };
    });
  };

  const setJoining = (joining) => {
    setState(function (prev) {
      return {
        ...prev,
        joining,
      };
    });
  };
  console.log('main state--> ', state)
  return (
    <FormDataProvider
      value={{ ...state, setLabelandRoles, setSkills, setQty, setJoining }}
    >
      {children}
    </FormDataProvider>
  );
};

export default FormDataContainer;
