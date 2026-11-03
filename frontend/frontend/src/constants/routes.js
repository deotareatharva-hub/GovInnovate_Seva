// src/constants/routes.js

// Public routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
};

// Authentication routes
export const AUTH_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  VERIFY_EMAIL: "/verify-email",
  FORGOT_PASSWORD: "/forgot-password",
};

// Admin routes
export const ADMIN_ROUTES = {
  BASE: "/admin",
  DASHBOARD: "/admin/dashboard",
  USERS: "/admin/users",
  GOVERNMENT_ACCOUNTS: "/admin/government-accounts",
  EXPERT_ACCOUNTS: "/admin/expert-accounts",
  BULK_UPLOAD: "/admin/bulk-upload",
  DEPARTMENTS: "/admin/departments",
  DISTRICTS: "/admin/districts",
  ANALYTICS: "/admin/analytics",
  AUDIT_LOGS: "/admin/audit-logs",
  SETTINGS: "/admin/settings",
};

// Government routes
export const GOVERNMENT_ROUTES = {
  BASE: "/government",
  DASHBOARD: "/government/dashboard",
  CHALLENGES: "/government/challenges",
  CREATE_CHALLENGE: "/government/challenges/create",
  MATCHED_STARTUPS: "/government/matched-startups",
  SUBMISSIONS: "/government/submissions",
  SHORTLISTED: "/government/shortlisted",
  ASSIGN_EXPERTS: "/government/assign-experts",
  EVALUATIONS: "/government/evaluations",
  PILOTS: "/government/pilots",
  VALIDATION: "/government/validation",
  FEEDBACK: "/government/feedback",
  PROCUREMENT: "/government/procurement",
  SCALING: "/government/scaling",
};

// Startup routes
export const STARTUP_ROUTES = {
  BASE: "/startup",
  DASHBOARD: "/startup/dashboard",
  PROFILE: "/startup/profile",
  VERIFICATION: "/startup/verification",
  INNOVATIONS: "/startup/innovations",
  ADD_INNOVATION: "/startup/innovations/add",
  CHALLENGES: "/startup/challenges",
  MATCHES: "/startup/matches",
  SUBMISSIONS: "/startup/submissions",
  NEW_SUBMISSION: "/startup/submissions/new",
  EVALUATIONS: "/startup/evaluations",
  PILOTS: "/startup/pilots",
  MILESTONES: "/startup/milestones",
  NOTIFICATIONS: "/startup/notifications",
};

// Expert routes
export const EXPERT_ROUTES = {
  BASE: "/expert",
  DASHBOARD: "/expert/dashboard",
  ASSIGNMENTS: "/expert/assignments",
  EVALUATIONS: "/expert/evaluations",
  HISTORY: "/expert/history",
  EVIDENCE: "/expert/evidence",
  PILOTS: "/expert/pilots",
  VALIDATION: "/expert/validation",
  CONFLICT_OF_INTEREST: "/expert/conflict-of-interest",
  PROFILE: "/expert/profile",
};

// General application routes
export const APP_ROUTES = {
  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "*",
};