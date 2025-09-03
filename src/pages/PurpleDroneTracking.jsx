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
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    setError(null);
    setTrackingData(null);

    try {
      const result = await trackPackage(trackingNumber);
      setTrackingData(result);
    } catch (err) {
      setError(err.message || "Failed to track package. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTrackingDate = (dateString) => {
    try {
      if (!dateString) return { date: "N/A", time: "N/A" };

      // Handle different date formats from API
      let date;
      if (
        dateString.includes("September") ||
        dateString.includes("AM") ||
        dateString.includes("PM")
      ) {
        // Handle format like "September 03, 2025, 07:06 AM"
        date = new Date(dateString);
      } else {
        // Handle ISO format like "2025-09-03T05:15:17.208929"
        date = new Date(dateString);
      }

      if (isNaN(date.getTime())) {
        return { date: "N/A", time: "N/A" };
      }

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                PurpleDrone Tracking
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Track your drone delivery packages with real-time updates and
                detailed tracking information
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <motion.div
          className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <form onSubmit={handleTrack} className="space-y-6">
            <div>
              <label
                htmlFor="trackingNumber"
                className="block text-lg font-semibold text-slate-200 mb-3"
              >
                Enter AWB Number
              </label>
              {/* Mobile: Stacked layout, Desktop: Input and button in same row */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  id="trackingNumber"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your AWB number (e.g., PRD008032113P)"
                  className="flex-1 px-4 py-3 border-2 border-slate-600 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 text-base bg-slate-700/50 backdrop-blur-sm text-white placeholder-slate-400"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !trackingNumber.trim()}
                  className="lg:w-auto w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
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
              </div>
            </div>
          </form>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-400 mr-4"
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
                <span className="text-red-300 font-medium text-lg">
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
              className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center"
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
              <h3 className="text-xl font-bold text-white mb-3">
                Tracking Your Package
              </h3>
              <p className="text-slate-300 text-lg">
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
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const { data } = trackingData;
                const { orderData, histData, narvarData, Client, status } =
                  data.data;
                const latestEvent =
                  histData && histData.length > 0 ? histData[0] : null;

                return (
                  <div className="space-y-8">
                    {/* Status Header */}
                    <motion.div
                      className="bg-slate-800/60 backdrop-blur-xl text-white rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-4 sm:mb-0">
                          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                            AWB:{" "}
                            {latestEvent?.AWBNumber ||
                              orderData?.OrderNumber ||
                              "N/A"}
                          </h2>
                          <p className="text-slate-300 text-lg">
                            Last Updated:{" "}
                            {formatTrackingDate(latestEvent?.CreatedAt).date},{" "}
                            {formatTrackingDate(latestEvent?.CreatedAt).time}
                          </p>
                        </div>
                        <div className="text-center sm:text-right">
                          <div className="flex items-center justify-center sm:justify-end space-x-3 mb-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xl sm:text-2xl font-bold">
                              {status || "N/A"}
                            </span>
                          </div>
                          <p className="text-slate-300 text-lg">
                            Current Status
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Package Information */}
                    <motion.div
                      className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                          <div className="text-sm text-slate-300 font-medium mb-2">
                            Customer
                          </div>
                          <div className="font-semibold text-white text-lg break-words">
                            {orderData?.CustomerName || "N/A"}
                          </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                          <div className="text-sm text-slate-300 font-medium mb-2">
                            Address
                          </div>
                          <div className="font-semibold text-white text-lg">
                            {orderData?.DeliveryCity || "N/A"},{" "}
                            {orderData?.CustomerDeliveryPincode || "N/A"}
                          </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                          <div className="text-sm text-slate-300 font-medium mb-2">
                            Shipper
                          </div>
                          <div className="font-semibold text-white text-lg">
                            {Client || "N/A"}
                          </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                          <div className="text-sm text-slate-300 font-medium mb-2">
                            Order Number
                          </div>
                          <div className="font-mono text-sm text-slate-300 break-all">
                            {orderData?.OrderNumber || "N/A"}
                          </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                          <div className="text-sm text-slate-300 font-medium mb-2">
                            Amount
                          </div>
                          <div className="font-semibold text-white text-lg">
                            INR {orderData?.Amount || "N/A"}
                          </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50">
                          <div className="text-sm text-slate-300 font-medium mb-2">
                            Payment
                          </div>
                          <div className="font-semibold text-white text-lg">
                            {orderData?.PaymentType || "N/A"}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Delivery Timeline */}
                    <motion.div
                      className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
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
                                className="flex items-start space-x-4 p-4 bg-slate-700/50 rounded-xl border border-slate-600/50"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="flex-shrink-0">
                                  <div
                                    className={`w-4 h-4 rounded-full ${
                                      index === 0
                                        ? "bg-green-500"
                                        : index === histData.length - 1
                                        ? "bg-gray-400"
                                        : "bg-emerald-500"
                                    }`}
                                  ></div>
                                  {index < histData.length - 1 && (
                                    <div className="w-px h-8 bg-emerald-300 ml-2 mt-1"></div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="font-semibold text-white text-lg">
                                      {event.Remarks}
                                    </h4>
                                    <span
                                      className={`px-3 py-1 rounded-full text-sm font-medium border ${
                                        index === 0
                                          ? "bg-green-500/20 text-green-300 border-green-500/30"
                                          : "bg-slate-600/50 text-slate-300 border-slate-500/50"
                                      }`}
                                    >
                                      {event.Status || "N/A"}
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                                    <div className="flex items-center">
                                      <svg
                                        className="w-4 h-4 mr-2 text-emerald-500"
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
                                      <span>{date}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <svg
                                        className="w-4 h-4 mr-2 text-emerald-500"
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
                                      <span>{time}</span>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })
                        ) : (
                          <div className="text-center py-12">
                            <div className="w-16 h-16 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-slate-400"
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
                            <p className="text-slate-300 text-lg">
                              No tracking history available
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Status Details */}
                    {narvarData && narvarData.length > 0 && (
                      <motion.div
                        className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
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
                          Status Details
                        </h3>
                        <div className="space-y-4">
                          {narvarData.map((item, index) => (
                            <motion.div
                              key={index}
                              className="bg-slate-700/50 rounded-xl p-4 sm:p-6 border border-slate-600/50"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                  <span className="text-slate-300 font-medium">
                                    Status:
                                  </span>
                                  <p className="text-white font-semibold text-lg">
                                    {item.Status}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-slate-300 font-medium">
                                    Mode:
                                  </span>
                                  <p className="text-white font-semibold text-lg">
                                    {item.ShipmentMode}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-slate-300 font-medium">
                                    Location:
                                  </span>
                                  <p className="text-white font-semibold text-lg break-words">
                                    {item.LocationName ||
                                      item.CityName ||
                                      "N/A"}
                                  </p>
                                </div>
                              </div>
                              <div className="pt-4 border-t border-slate-600/50">
                                <div className="text-sm text-slate-300 space-y-1">
                                  <div>
                                    Created: {formatDate(item.CreatedAt)}
                                  </div>
                                  {item.DeliveryDate && (
                                    <div>
                                      Expected: {formatDate(item.DeliveryDate)}
                                    </div>
                                  )}
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
            className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-slate-300"
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
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Track
            </h3>
            <p className="text-slate-300 text-lg">
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
