import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  trackPackage,
  formatDate,
  getStatusColor,
} from "../services/purpleDroneApi";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);
  // Removed demo mode - using real API only

  useEffect(() => {
    document.title = "TrackIndia - Package Tracking";
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

  const getStatusIcon = (status) => {
    const statusLower = status?.toLowerCase() || "";

    if (
      statusLower.includes("delivered") ||
      statusLower.includes("completed")
    ) {
      return (
        <svg
          className="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    } else if (
      statusLower.includes("out for delivery") ||
      statusLower.includes("ofd")
    ) {
      return (
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    } else if (
      statusLower.includes("in transit") ||
      statusLower.includes("picked up")
    ) {
      return (
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      );
    } else if (
      statusLower.includes("bagged") ||
      statusLower.includes("added in bag")
    ) {
      return (
        <svg
          className="w-6 h-6 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="w-6 h-6 text-slate-500"
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
      );
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Package Tracking
              </h1>
              <p className="text-gray-600 mt-1">
                Track your packages with real-time updates
              </p>
            </div>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleTrack}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-1">
              <label
                htmlFor="trackingNumber"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Enter Tracking Number
              </label>
              <input
                type="text"
                id="trackingNumber"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your AWB number (e.g., PRD008032113P)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 text-lg"
              />
            </div>
            <div className="flex items-end">
              <motion.button
                type="submit"
                disabled={isLoading || !trackingNumber.trim()}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none flex items-center space-x-2"
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
            </div>
          </form>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-400 mr-3"
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
                <span className="text-red-700 font-medium">{error}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tracking Your Package
              </h3>
              <p className="text-gray-600">
                Please wait while we fetch the latest information...
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
                const latestNarvar =
                  narvarData && narvarData.length > 0 ? narvarData[0] : null;

                return (
                  <div className="space-y-8">
                    {/* Main Status Card */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-3xl font-bold mb-2">
                              AWB Number {orderData?.AWBNumber || "N/A"}
                            </h2>
                            {latestEvent && (
                              <p className="text-blue-100 text-lg">
                                ({latestEvent.CreatedAt})
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-3 mb-2">
                              {getStatusIcon(status)}
                              <span className="text-2xl font-bold">
                                {status || "N/A"}
                              </span>
                            </div>
                            <p className="text-blue-100">Current Status</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Customer and Order Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Customer Details */}
                      <motion.div
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <svg
                            className="w-6 h-6 text-emerald-500 mr-3"
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
                          Customer Details
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              Name
                            </span>
                            <span className="text-gray-900 font-semibold">
                              {orderData?.CustomerName || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              Address
                            </span>
                            <span className="text-gray-900 font-semibold">
                              {orderData?.DeliveryCity || "N/A"},{" "}
                              {orderData?.CustomerDeliveryPincode || "N/A"}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Order Details */}
                      <motion.div
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <svg
                            className="w-6 h-6 text-blue-500 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Order Details
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              Order Number
                            </span>
                            <span className="text-gray-900 font-mono text-sm">
                              {orderData?.OrderNumber || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              AWB Number
                            </span>
                            <span className="text-gray-900 font-mono text-sm">
                              {orderData?.AWBNumber || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              Shipper Name
                            </span>
                            <span className="text-gray-900 font-semibold">
                              {Client || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              AWB Date
                            </span>
                            <span className="text-gray-900 font-semibold">
                              {latestEvent ? latestEvent.CreatedAt : "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gray-100">
                            <span className="font-medium text-gray-600">
                              Total Amount
                            </span>
                            <span className="text-gray-900 font-semibold">
                              INR {orderData?.Amount || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between py-3">
                            <span className="font-medium text-gray-600">
                              Payment Mode
                            </span>
                            <span className="text-gray-900 font-semibold">
                              {orderData?.PaymentType || "N/A"}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Track History */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg
                          className="w-6 h-6 text-purple-500 mr-3"
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
                        Track History
                      </h3>
                      <div className="bg-blue-50 rounded-xl p-6">
                        <div className="space-y-6">
                          {histData && histData.length > 0 ? (
                            histData.map((event, index) => {
                              const { date, time } = formatTrackingDate(
                                event.CreatedAt
                              );
                              return (
                                <motion.div
                                  key={index}
                                  className="flex items-start space-x-4"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                  <div className="flex-shrink-0">
                                    <div
                                      className={`w-4 h-4 rounded-full ${
                                        index === 0
                                          ? "bg-emerald-500"
                                          : "bg-blue-400"
                                      }`}
                                    ></div>
                                    {index < histData.length - 1 && (
                                      <div className="w-px h-12 bg-blue-300 ml-1.5 mt-2"></div>
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                                      <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900">
                                          {event.Remarks}
                                        </h4>
                                        <span
                                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                                            event.Remarks
                                          )}`}
                                        >
                                          {event.Status || "N/A"}
                                        </span>
                                      </div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                        <div>
                                          <span className="font-medium">
                                            Date:
                                          </span>{" "}
                                          {date}
                                        </div>
                                        <div>
                                          <span className="font-medium">
                                            Time:
                                          </span>{" "}
                                          {time}
                                        </div>
                                        <div>
                                          <span className="font-medium">
                                            Location:
                                          </span>{" "}
                                          {event.userlocation}
                                        </div>
                                        <div>
                                          <span className="font-medium">
                                            Updated by:
                                          </span>{" "}
                                          {event.createdBy}
                                        </div>
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
                      </div>
                    </motion.div>

                    {/* Detailed Status Information */}
                    {narvarData && narvarData.length > 0 && (
                      <motion.div
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <svg
                            className="w-6 h-6 text-indigo-500 mr-3"
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
                          Detailed Status Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {narvarData.map((item, index) => (
                            <motion.div
                              key={item.id || index}
                              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200"
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
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <span className="text-gray-600">Code:</span>
                                    <p className="font-mono text-gray-900">
                                      {item.StatusCode}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600">Mode:</span>
                                    <p className="text-gray-900">
                                      {item.ShipmentMode}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600">
                                      Location:
                                    </span>
                                    <p className="text-gray-900">
                                      {item.LocationName ||
                                        item.CityName ||
                                        "N/A"}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600">
                                      State:
                                    </span>
                                    <p className="text-gray-900">
                                      {item.StateName || "N/A"}
                                    </p>
                                  </div>
                                </div>
                                <div className="pt-3 border-t border-indigo-200">
                                  <div className="text-xs text-gray-500">
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
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Track
            </h3>
            <p className="text-gray-600">
              Enter a tracking number above to get started
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
