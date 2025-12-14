/**
 * Validate email format
 * @param {String} email
 * @returns {Boolean}
 */
export const isValidEmail = (email) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

/**
 * Validate password strength
 * @param {String} password
 * @returns {Boolean}
 */
export const isStrongPassword = (password) => {
  return password && password.length >= 6;
};

/**
 * Validate MongoDB ObjectId
 * @param {String} id
 * @returns {Boolean}
 */
export const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

/**
 * Validate movie payload
 * @param {Object} data
 * @returns {Object}
 */
export const validateMoviePayload = (data) => {
  const errors = [];

  if (!data.title) errors.push("Title is required");
  if (!data.description) errors.push("Description is required");
  if (typeof data.rating !== "number") errors.push("Rating must be a number");
  if (!data.duration || data.duration <= 0)
    errors.push("Duration must be greater than 0");
  if (!data.releaseDate) errors.push("Release date is required");

  return {
    isValid: errors.length === 0,
    errors,
  };
};
