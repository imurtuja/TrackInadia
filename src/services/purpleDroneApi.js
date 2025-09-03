// PurpleDrone API service for tracking integration
// Vercel API route for production, proxy for development
const PURPLE_DRONE_API_BASE = import.meta.env.DEV
  ? "/api/purpledrone"
  : "/api/purpledrone";

/**
 * Track package using PurpleDrone API
 * @param {string} awbNumber - The Air Waybill Number to track
 * @returns {Promise<Object>} - Tracking data response
 */
export const trackPackage = async (awbNumber) => {
  try {
    // Use Vercel API route for both development and production
    const response = await fetch(`${PURPLE_DRONE_API_BASE}/tracking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        awbnumber: awbNumber,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();

    // Validate response structure
    if (!result || typeof result !== "object") {
      throw new Error("Invalid response format from tracking API");
    }

    return result;
  } catch (error) {
    console.error("PurpleDrone API Error:", error);
    throw error; // Re-throw error instead of falling back to mock data
  }
};

/**
 * Utility function to format date strings
 * @param {string} dateString - Date string to format
 * @returns {string} - Formatted date
 */
export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch (error) {
    return dateString;
  }
};

/**
 * Utility function to get status color based on status
 * @param {string} status - Status string
 * @returns {string} - Tailwind color class
 */
export const getStatusColor = (status) => {
  const statusLower = status?.toLowerCase() || "";

  if (statusLower.includes("delivered") || statusLower.includes("completed")) {
    return "text-green-400 bg-green-400/10 border-green-400/20";
  } else if (
    statusLower.includes("out for delivery") ||
    statusLower.includes("ofd")
  ) {
    return "text-blue-400 bg-blue-400/10 border-blue-400/20";
  } else if (
    statusLower.includes("in transit") ||
    statusLower.includes("picked up")
  ) {
    return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
  } else if (
    statusLower.includes("bagged") ||
    statusLower.includes("added in bag")
  ) {
    return "text-purple-400 bg-purple-400/10 border-purple-400/20";
  } else if (
    statusLower.includes("soft data") ||
    statusLower.includes("received")
  ) {
    return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
  } else {
    return "text-slate-400 bg-slate-400/10 border-slate-400/20";
  }
};
