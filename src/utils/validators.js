// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

// Password validation (min 6 chars)
export const isValidPassword = (password) => {
  return typeof password === "string" && password.length >= 6;
};

// Required field validation
export const isRequired = (value) => {
  return value !== null && value !== undefined && value !== "";
};

// Movie form validation
export const validateMovie = (movie) => {
  const errors = {};

  if (!isRequired(movie.title)) {
    errors.title = "Title is required";
  }

  if (!isRequired(movie.description)) {
    errors.description = "Description is required";
  }

  if (movie.rating && (movie.rating < 0 || movie.rating > 10)) {
    errors.rating = "Rating must be between 0 and 10";
  }

  if (movie.duration && movie.duration <= 0) {
    errors.duration = "Duration must be greater than 0";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Auth form validation
export const validateAuth = ({ email, password }) => {
  const errors = {};

  if (!isValidEmail(email)) {
    errors.email = "Invalid email address";
  }

  if (!isValidPassword(password)) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};