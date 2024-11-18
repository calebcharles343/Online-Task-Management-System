import React, { createContext, useContext, useState } from "react";

interface FormData {
  job: string;
  country: string;
  fullTimeOnly: boolean;
}

interface FormDataContextType {
  formData: FormData;
  updateField: (name: string, value: string | boolean) => void;
  handleSubmit: () => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    job: "",
    country: "",
    fullTimeOnly: false,
  });

  // Update individual fields in formData
  const updateField = (name: string, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission and log the formData
  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <FormDataContext.Provider value={{ formData, updateField, handleSubmit }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to use the FormDataContext
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
