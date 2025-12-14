// User roles
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};

// Sort options for movies
export const SORT_OPTIONS = [
  { label: "Name (A-Z)", value: "title_asc" },
  { label: "Name (Z-A)", value: "title_desc" },
  { label: "Rating (High to Low)", value: "rating_desc" },
  { label: "Rating (Low to High)", value: "rating_asc" },
  { label: "Release Date (Newest)", value: "releaseDate_desc" },
  { label: "Release Date (Oldest)", value: "releaseDate_asc" },
  { label: "Duration (Short to Long)", value: "duration_asc" },
  { label: "Duration (Long to Short)", value: "duration_desc" },
];

// API status messages
export const API_MESSAGES = {
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "Access denied",
  NOT_FOUND: "Resource not found",
  SERVER_ERROR: "Something went wrong",
};

// App routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  SEARCH: "/search",
  ADMIN: "/admin",
};