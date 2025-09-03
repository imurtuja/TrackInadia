// Vercel API route for PurpleDrone tracking
// This handles CORS and proxies requests to the actual PurpleDrone API

// Configure timeout for Vercel
export const config = {
  api: {
    responseLimit: false,
  },
  maxDuration: 60, // 60 seconds timeout for Pro plan
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { awbnumber } = req.body;

    if (!awbnumber) {
      return res.status(400).json({ error: "AWB number is required" });
    }

    // First, get CSRF token with shorter timeout
    const csrfController = new AbortController();
    const csrfTimeout = setTimeout(() => csrfController.abort(), 10000); // 10 second timeout

    const csrfResponse = await fetch(
      "https://app.cuberoote.com/cuberootapi/tracking",
      {
        method: "GET",
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
        },
        signal: csrfController.signal,
      }
    );

    clearTimeout(csrfTimeout);

    if (!csrfResponse.ok) {
      throw new Error(`Failed to get CSRF token: ${csrfResponse.status}`);
    }

    // Extract CSRF token from response
    const responseText = await csrfResponse.text();
    const csrfMatch = responseText.match(
      /name="csrfmiddlewaretoken" value="([^"]+)"/
    );
    const csrfToken = csrfMatch ? csrfMatch[1] : "";

    // Make tracking request with timeout
    const trackingController = new AbortController();
    const trackingTimeout = setTimeout(() => trackingController.abort(), 10000); // 10 second timeout

    const trackingResponse = await fetch(
      "https://app.cuberoote.com/cuberootapi/trackwithawb",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
          ...(csrfToken && { "X-CSRFToken": csrfToken }),
        },
        body: new URLSearchParams({
          awbnumber: awbnumber,
          ...(csrfToken && { csrfmiddlewaretoken: csrfToken }),
        }),
        signal: trackingController.signal,
      }
    );

    clearTimeout(trackingTimeout);

    if (!trackingResponse.ok) {
      throw new Error(`Tracking request failed: ${trackingResponse.status}`);
    }

    const trackingData = await trackingResponse.json();

    return res.status(200).json({
      success: true,
      data: trackingData,
      status: trackingData.Status || false,
      statusCode: trackingData.StatusCode || 0,
      message: trackingData.message || "Tracking completed",
    });
  } catch (error) {
    console.error("PurpleDrone API Error:", error);

    // Handle specific error types
    if (error.name === "AbortError") {
      return res.status(504).json({
        success: false,
        error:
          "Request timeout - The API took too long to respond. Please try again.",
        data: null,
      });
    }

    if (error.message.includes("504") || error.message.includes("timeout")) {
      return res.status(504).json({
        success: false,
        error:
          "Gateway timeout - The external API is taking too long to respond. Please try again later.",
        data: null,
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message,
      data: null,
    });
  }
}
