// src/utils/permissions.js

import { ROLES } from "../constants/roles";

// Define frontend permissions for each role.
const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    "manage_users",
    "manage_government_accounts",
    "manage_expert_accounts",
    "manage_departments",
    "manage_districts",
    "bulk_upload",
    "view_platform_analytics",
    "view_audit_logs",
    "manage_settings",
  ],

  [ROLES.GOVERNMENT]: [
    "create_challenge",
    "manage_challenges",
    "view_matched_startups",
    "review_submissions",
    "shortlist_startups",
    "assign_experts",
    "view_evaluations",
    "manage_pilots",
    "validate_pilots",
    "view_feedback",
    "make_procurement_decisions",
    "manage_scaling",
  ],

  [ROLES.STARTUP]: [
    "manage_profile",
    "manage_innovations",
    "browse_challenges",
    "view_ai_matches",
    "submit_proposals",
    "view_own_submissions",
    "view_own_evaluations",
    "view_own_pilots",
    "manage_pilot_milestones",
    "view_notifications",
  ],

  [ROLES.EXPERT]: [
    "view_assigned_challenges",
    "view_assigned_submissions",
    "evaluate_submissions",
    "view_evaluation_history",
    "view_startup_evidence",
    "view_assigned_pilots",
    "validate_assigned_pilots",
    "manage_conflict_of_interest",
    "manage_expert_profile",
  ],
};

// Check whether a role has a particular permission.
export const hasPermission = (role, permission) => {
  if (!role || !permission) return false;

  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
};

// Check whether a role has at least one of the given permissions.
export const hasAnyPermission = (role, permissions = []) => {
  if (!Array.isArray(permissions) || permissions.length === 0) {
    return false;
  }

  return permissions.some((permission) =>
    hasPermission(role, permission)
  );
};

// Check whether a role has all the given permissions.
export const hasAllPermissions = (role, permissions = []) => {
  if (!Array.isArray(permissions) || permissions.length === 0) {
    return false;
  }

  return permissions.every((permission) =>
    hasPermission(role, permission)
  );
};

// Get all permissions assigned to a role.
export const getRolePermissions = (role) => {
  return ROLE_PERMISSIONS[role] || [];
};