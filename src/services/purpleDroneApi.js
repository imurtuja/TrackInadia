// PurpleDrone API service for tracking integration
// Using Vite proxy for development - no CORS issues
const PURPLE_DRONE_API_BASE = "/api/purpledrone";

/**
 * Track package using PurpleDrone API
 * @param {string} awbNumber - The Air Waybill Number to track
 * @returns {Promise<Object>} - Tracking data response
 */
export const trackPackage = async (awbNumber) => {
  try {
    // First, get the CSRF token by making a GET request to the tracking page
    const csrfResponse = await fetch(`${PURPLE_DRONE_API_BASE}/tracking`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    if (!csrfResponse.ok) {
      throw new Error(`Failed to get CSRF token: ${csrfResponse.status}`);
    }

    // Extract CSRF token from cookies
    const cookies = csrfResponse.headers.get("set-cookie");
    let csrfToken = "";
    if (cookies) {
      const csrfMatch = cookies.match(/csrftoken=([^;]+)/);
      if (csrfMatch) {
        csrfToken = csrfMatch[1];
      }
    }

    // If no CSRF token from cookies, try to extract from response text
    if (!csrfToken) {
      const responseText = await csrfResponse.text();
      const csrfMatch = responseText.match(
        /name="csrfmiddlewaretoken" value="([^"]+)"/
      );
      if (csrfMatch) {
        csrfToken = csrfMatch[1];
      }
    }

    // Now make the tracking request
    const formData = new FormData();
    formData.append("awbnumber", awbNumber);
    if (csrfToken) {
      formData.append("csrfmiddlewaretoken", csrfToken);
    }

    const trackingResponse = await fetch(
      `${PURPLE_DRONE_API_BASE}/trackwithawb`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
          ...(csrfToken && { "X-CSRFToken": csrfToken }),
        },
        body: new URLSearchParams({
          awbnumber: awbNumber,
          ...(csrfToken && { csrfmiddlewaretoken: csrfToken }),
        }),
      }
    );

    if (!trackingResponse.ok) {
      throw new Error(`Tracking request failed: ${trackingResponse.status}`);
    }

    const trackingData = await trackingResponse.json();

    // Validate response structure
    if (!trackingData || typeof trackingData !== "object") {
      throw new Error("Invalid response format from tracking API");
    }

    return {
      success: true,
      data: trackingData,
      status: trackingData.Status || false,
      statusCode: trackingData.StatusCode || 0,
      message: trackingData.message || "Tracking completed",
    };
  } catch (error) {
    console.error("PurpleDrone API Error:", error);
    return {
      success: false,
      error: error.message,
      data: null,
    };
  }
};

/**
 * Mock tracking data for development/testing
 * @param {string} awbNumber - The Air Waybill Number
 * @returns {Promise<Object>} - Mock tracking data
 */
export const getMockTrackingData = async (awbNumber) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: true,
    data: {
      Status: true,
      StatusCode: 200,
      message: "Success",
      data: {
        orderData: {
          CustomerName: "Golam Murtuja Golam Murtuja",
          CustomerDeliveryPincode: "500098",
          DeliveryCity: "BODUPPAL",
          OrderNumber: "SNXS2260000034161408",
          UpdatedAt: "2025-09-03T03:16:51.314260",
          CreatedAt: "2025-09-02T19:28:26.238597",
          Amount: "1.0",
          PaymentType: "PREPAID",
          Client: 29,
          orderstatus: "Bagged",
        },
        histData: [
          {
            Remarks: "Added in bag",
            AWBNumber: awbNumber,
            DRSCode: "--",
            createdBy: "Suresh kumar",
            CreatedAt: "September 03, 2025, 03:16 AM",
            Status: null,
            userlocation: "Manser",
          },
          {
            Remarks: "Pickup Scanned by Excel",
            AWBNumber: awbNumber,
            DRSCode: "--",
            createdBy: "Prem Chand Yadav",
            CreatedAt: "September 02, 2025, 22:02 PM",
            Status: 36,
            userlocation: "Manser",
          },
          {
            Remarks: "Soft Data Recieved",
            AWBNumber: awbNumber,
            DRSCode: "--",
            createdBy: "cube admin",
            CreatedAt: "September 02, 2025, 19:28 PM",
            Status: 44,
            userlocation: "Pune",
          },
        ],
        narvarData: [
          {
            id: 45680814,
            AWBNumber: awbNumber,
            ClientName: "Lenskart",
            LocationName: "",
            Status: "Pickup-Scanned",
            StatusCode: "876553",
            is_active: false,
            CreatedAt: "2025-09-02T22:02:13.164228",
            UpdatedAt: "2025-09-02T22:03:33.967695",
            ShipmentMode: "F",
            CityName: "",
            StateName: "",
            OFDDate: null,
            DeliveryDate: "2025-09-03T03:16:51.314260",
          },
          {
            id: 45667720,
            AWBNumber: awbNumber,
            ClientName: "Lenskart",
            LocationName: "Hyderabad",
            Status: "Softdata Recieved",
            StatusCode: "24",
            is_active: false,
            CreatedAt: "2025-09-02T19:28:26.255158",
            UpdatedAt: "2025-09-02T19:31:14.741045",
            ShipmentMode: "F",
            CityName: "Hyderabad",
            StateName: "Hyderabad",
            OFDDate: null,
            DeliveryDate: "2025-09-03T03:16:51.314260",
          },
        ],
        Client: "Lenskart",
        status: "Bagged",
      },
    },
    status: true,
    statusCode: 200,
    message: "Mock tracking data loaded successfully",
  };
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
