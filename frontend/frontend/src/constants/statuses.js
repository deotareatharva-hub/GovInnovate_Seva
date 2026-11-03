// src/constants/statuses.js

// Challenge statuses
export const CHALLENGE_STATUS = Object.freeze({
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  UNDER_REVIEW: "UNDER_REVIEW",
  CLOSED: "CLOSED",
});

// Startup submission statuses
export const SUBMISSION_STATUS = Object.freeze({
  DRAFT: "DRAFT",
  SUBMITTED: "SUBMITTED",
  UNDER_REVIEW: "UNDER_REVIEW",
  SHORTLISTED: "SHORTLISTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  WITHDRAWN: "WITHDRAWN",
});

// Expert evaluation statuses
export const EVALUATION_STATUS = Object.freeze({
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
});

// Pilot project statuses
export const PILOT_STATUS = Object.freeze({
  PLANNED: "PLANNED",
  ACTIVE: "ACTIVE",
  UNDER_VALIDATION: "UNDER_VALIDATION",
  SUCCESSFUL: "SUCCESSFUL",
  FAILED: "FAILED",
  COMPLETED: "COMPLETED",
});

// Procurement statuses
export const PROCUREMENT_STATUS = Object.freeze({
  PENDING: "PENDING",
  UNDER_REVIEW: "UNDER_REVIEW",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  ON_HOLD: "ON_HOLD",
});

// Account statuses
export const ACCOUNT_STATUS = Object.freeze({
  PENDING: "PENDING",
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  SUSPENDED: "SUSPENDED",
});

// Verification statuses
export const VERIFICATION_STATUS = Object.freeze({
  NOT_SUBMITTED: "NOT_SUBMITTED",
  PENDING: "PENDING",
  UNDER_REVIEW: "UNDER_REVIEW",
  VERIFIED: "VERIFIED",
  REJECTED: "REJECTED",
});