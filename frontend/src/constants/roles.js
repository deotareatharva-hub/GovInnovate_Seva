// src/constants/roles.js

export const ROLES = Object.freeze({
  ADMIN: "ADMIN",
  GOVERNMENT: "GOVERNMENT",
  STARTUP: "STARTUP",
  EXPERT: "EXPERT",
});

// Dashboard paths for each role
export const ROLE_DASHBOARDS = Object.freeze({
  [ROLES.ADMIN]: "/admin/dashboard",
  [ROLES.GOVERNMENT]: "/government/dashboard",
  [ROLES.STARTUP]: "/startup/dashboard",
  [ROLES.EXPERT]: "/expert/dashboard",
});

// Get dashboard path based on logged-in user's role
export const getDashboardPath = (role) => {
  return ROLE_DASHBOARDS[role] || "/login";
};