import jwt from "jsonwebtoken";

/**
 * Generate JWT token
 * @param {String} userId
 * @param {String} role
 * @returns {String} token
 */
export const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

/**
 * Verify JWT token
 * @param {String} token
 * @returns {Object} decoded payload
 */
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
