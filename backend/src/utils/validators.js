export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateString = (str, minLength = 3) => {
    return typeof str === "string" && str.trim().length >= minLength;
  };
  
  export const validateGrievance = (data) => {
    const { name, email, issue, details } = data;
    if (!validateString(name) || !validateEmail(email) || !validateString(issue) || !validateString(details, 10)) {
      return { valid: false, message: "Invalid input data. Please check all fields." };
    }
    return { valid: true };
  };
  
  export const validateScheme = (data) => {
    const { name, description, eligibility, benefits, applicationProcess } = data;
    if (!validateString(name) || !validateString(description, 10) || !validateString(eligibility, 10) || !validateString(benefits, 10) || !validateString(applicationProcess, 10)) {
      return { valid: false, message: "Invalid scheme data. Please check all fields." };
    }
    return { valid: true };
  };