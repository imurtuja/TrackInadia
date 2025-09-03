import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  trackPackage,
  formatDate,
  getStatusColor,
} from "../services/purpleDroneApi";

const PurpleDroneTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);
  // Removed demo mode - using real API only

  useEffect(() => {
    // SEO Optimization for PurpleDrone Tracking
    document.title =
      "PurpleDrone Tracking - Track Your Drone Delivery | TrackIndia";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Track your PurpleDrone delivery packages with real-time updates. Advanced drone delivery tracking system with detailed package information, delivery status, and timeline."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Track your PurpleDrone delivery packages with real-time updates. Advanced drone delivery tracking system with detailed package information, delivery status, and timeline.";
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PurpleDrone Tracking",
      description:
        "Advanced drone delivery tracking system for PurpleDrone packages",
      url: window.location.href,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      provider: {
        "@type": "Organization",
        name: "TrackIndia",
        url: "https://trackindia.vercel.app",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setIsLoading(true);
    setError(null);
    setTrackingData(null);

    try {
      // Always use real API - no demo mode
      const result = await trackPackage(trackingNumber);

      if (result.success) {
        setTrackingData(result.data);
      } else {
        setError(result.error || "Failed to track package");
      }
    } catch (error) {
      console.error("Tracking error:", error);
      setError("An error occurred while tracking your package");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTrackingDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return {
        date: date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        time: date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      };
    } catch (error) {
      return { date: "N/A", time: "N/A" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Compact SEO-Optimized Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4 backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </motion.div>
              <motion.h1
                className="text-3xl lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                PurpleDrone Package Tracking
              </motion.h1>
              <motion.p
                className="text-lg text-purple-100 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Track your drone delivery packages with real-time updates and
                detailed tracking information
              </motion.p>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex items-center space-x-3 bg-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Compact Search Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <form
            onSubmit={handleTrack}
            className="flex flex-col sm:flex-row gap-4 items-end"
          >
            <div className="flex-1">
              <label
                htmlFor="trackingNumber"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Enter AWB Number
              </label>
              <input
                type="text"
                id="trackingNumber"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your AWB number (e.g., PRD008032113P)"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-base bg-purple-50/50"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isLoading || !trackingNumber.trim()}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold text-base hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <motion.svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </motion.svg>
                  <span>Tracking...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>Track Package</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-500 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-800 font-medium text-lg">
                  {error}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="bg-white rounded-3xl shadow-xl border border-purple-100 p-16 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Tracking Your Package
              </h3>
              <p className="text-gray-600 text-lg">
                Please wait while we fetch the latest information from
                PurpleDrone...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tracking Results */}
        <AnimatePresence>
          {trackingData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const { data } = trackingData;
                const { orderData, histData, narvarData, Client, status } =
                  data;
                const latestEvent =
                  histData && histData.length > 0 ? histData[0] : null;

                return (
                  <div className="space-y-6">
                    {/* Compact Status Header */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="mb-4 sm:mb-0">
                            <h2 className="text-2xl font-bold mb-1">
                              AWB: {latestEvent?.AWBNumber || "N/A"}
                            </h2>
                            {latestEvent && (
                              <p className="text-purple-100 text-sm">
                                Last Updated: {latestEvent.CreatedAt}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center space-x-3 bg-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-lg font-bold">
                                {status || "N/A"}
                              </div>
                              <div className="text-purple-100 text-xs">
                                Current Status
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Compact Package Information */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        Package Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Customer
                          </div>
                          <div className="font-semibold text-gray-900">
                            {orderData?.CustomerName || "N/A"}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Address
                          </div>
                          <div className="font-semibold text-gray-900">
                            {orderData?.DeliveryCity || "N/A"},{" "}
                            {orderData?.CustomerDeliveryPincode || "N/A"}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Shipper
                          </div>
                          <div className="font-semibold text-gray-900">
                            {Client || "N/A"}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Order Number
                          </div>
                          <div className="font-mono text-sm text-gray-900">
                            {orderData?.OrderNumber || "N/A"}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Amount
                          </div>
                          <div className="font-semibold text-gray-900">
                            INR {orderData?.Amount || "N/A"}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Payment
                          </div>
                          <div className="font-semibold text-gray-900">
                            {orderData?.PaymentType || "N/A"}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Compact Track History */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        Delivery Timeline
                      </h3>
                      <div className="space-y-4">
                        {histData && histData.length > 0 ? (
                          histData.map((event, index) => {
                            const { date, time } = formatTrackingDate(
                              event.CreatedAt
                            );
                            return (
                              <motion.div
                                key={index}
                                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                              >
                                <div className="flex-shrink-0">
                                  <div
                                    className={`w-4 h-4 rounded-full ${
                                      index === 0
                                        ? "bg-emerald-500"
                                        : "bg-purple-400"
                                    } flex items-center justify-center`}
                                  >
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                  </div>
                                  {index < histData.length - 1 && (
                                    <div className="w-px h-8 bg-purple-300 ml-2 mt-1"></div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-gray-900">
                                      {event.Remarks}
                                    </h4>
                                    <span
                                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                        event.Remarks
                                      )}`}
                                    >
                                      {event.Status || "N/A"}
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                    <div className="flex items-center">
                                      <svg
                                        className="w-3 h-3 mr-1 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                      </svg>
                                      <span className="font-medium">Date:</span>{" "}
                                      {date}
                                    </div>
                                    <div className="flex items-center">
                                      <svg
                                        className="w-3 h-3 mr-1 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                      <span className="font-medium">Time:</span>{" "}
                                      {time}
                                    </div>
                                    <div className="flex items-center">
                                      <svg
                                        className="w-3 h-3 mr-1 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                      <span className="font-medium">
                                        Location:
                                      </span>{" "}
                                      {event.userlocation}
                                    </div>
                                    <div className="flex items-center">
                                      <svg
                                        className="w-3 h-3 mr-1 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                      </svg>
                                      <span className="font-medium">By:</span>{" "}
                                      {event.createdBy}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })
                        ) : (
                          <p className="text-gray-500 text-center py-8">
                            No tracking history available
                          </p>
                        )}
                      </div>
                    </motion.div>

                    {/* Compact Status Details */}
                    {narvarData && narvarData.length > 0 && (
                      <motion.div
                        className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          Status Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {narvarData.map((item, index) => (
                            <motion.div
                              key={item.id || index}
                              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                            >
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-gray-900">
                                    Status
                                  </h4>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                      item.Status
                                    )}`}
                                  >
                                    {item.Status}
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                  <div>
                                    <span className="text-gray-600 font-medium">
                                      Code:
                                    </span>
                                    <p className="font-mono text-gray-900 font-semibold">
                                      {item.StatusCode}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600 font-medium">
                                      Mode:
                                    </span>
                                    <p className="text-gray-900 font-semibold">
                                      {item.ShipmentMode}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600 font-medium">
                                      Location:
                                    </span>
                                    <p className="text-gray-900 font-semibold">
                                      {item.LocationName ||
                                        item.CityName ||
                                        "N/A"}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600 font-medium">
                                      State:
                                    </span>
                                    <p className="text-gray-900 font-semibold">
                                      {item.StateName || "N/A"}
                                    </p>
                                  </div>
                                </div>
                                <div className="pt-2 border-t border-purple-200">
                                  <div className="text-xs text-gray-500 space-y-1">
                                    <div>
                                      Created: {formatDate(item.CreatedAt)}
                                    </div>
                                    {item.DeliveryDate && (
                                      <div>
                                        Expected:{" "}
                                        {formatDate(item.DeliveryDate)}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results State */}
        {!isLoading && !trackingData && !error && (
          <motion.div
            className="bg-white rounded-3xl shadow-xl border border-purple-100 p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Track
            </h3>
            <p className="text-gray-600 text-lg">
              Enter your AWB number above to get started with PurpleDrone
              tracking
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PurpleDroneTracking;
