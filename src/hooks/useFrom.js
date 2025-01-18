import { useState } from "react";

const useCustomForm = () => {
  const [formData, setFormData] = useState({
    feilds: {},
    errors: {},
  });

  const onSubmit = (handleSubmission) => {
    return (e) => {
      e.preventDefault();
      handleSubmission(formData, e);
    };
  };

  const register = (label) => {
    const onChange = (event) => {
      setFormData((prev) => ({
        ...prev,
        feilds: {
          ...prev.feilds,
          [label]: event.target.value,
        },
      }));
    };

    return {
      name: label,
      type: "text",
      value: formData.feilds[label],
      onChange,
    };
  };

  return {
    register,
    onSubmit,
  };
};

export default useCustomForm;
