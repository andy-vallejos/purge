import { useState } from "react";

export function useForm() {
  const [formData, setFormData] = useState({});

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    handleFieldChange,
  };
}
