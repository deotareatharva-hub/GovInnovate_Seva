// src/utils/formatCurrency.js

/**
 * Format a number as Indian Rupees.
 * Example: 1500000 -> ₹15,00,000
 */
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined || amount === "") {
    return "N/A";
  }

  const value = Number(amount);

  if (!Number.isFinite(value)) {
    return "N/A";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Format large amounts in a compact form.
 * Example: 1500000 -> ₹15L
 */
export const formatCompactCurrency = (amount) => {
  if (amount === null || amount === undefined || amount === "") {
    return "N/A";
  }

  const value = Number(amount);

  if (!Number.isFinite(value)) {
    return "N/A";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};