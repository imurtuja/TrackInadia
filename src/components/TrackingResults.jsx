import { motion, AnimatePresence } from "motion/react";
import { formatDate, getStatusColor } from "../services/purpleDroneApi";

const TrackingResults = ({ trackingData, isLoading, error, onClose }) => {
  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-slate-700/50"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className="text-center">
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
            <h3 className="text-xl font-bold text-white mb-2">
              Tracking Your Package
            </h3>
            <p className="text-slate-300">
              Please wait while we fetch the latest information...
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-red-500/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-400"
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
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Tracking Failed
            </h3>
            <p className="text-slate-300 mb-6">{error}</p>
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (!trackingData || !trackingData.data) {
    return null;
  }

  const { data } = trackingData;
  const { orderData, histData, narvarData, Client, status } = data;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-slate-800/90 backdrop-blur-xl rounded-2xl max-w-4xl mx-auto my-8 border border-slate-700/50"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Package Tracking Details
              </h2>
              <p className="text-slate-300">
                AWB Number:{" "}
                <span className="font-mono text-emerald-400">
                  {orderData?.AWBNumber || "N/A"}
                </span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Order Information */}
          <motion.div
            className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-emerald-400"
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
              Order Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-400">Customer Name</label>
                <p className="text-white font-medium">
                  {orderData?.CustomerName || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Order Number</label>
                <p className="text-white font-mono text-sm">
                  {orderData?.OrderNumber || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Delivery City</label>
                <p className="text-white">{orderData?.DeliveryCity || "N/A"}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Pincode</label>
                <p className="text-white">
                  {orderData?.CustomerDeliveryPincode || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Amount</label>
                <p className="text-white">₹{orderData?.Amount || "N/A"}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Payment Type</label>
                <p className="text-white">{orderData?.PaymentType || "N/A"}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Client</label>
                <p className="text-white">{Client || "N/A"}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Current Status</label>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                    status
                  )}`}
                >
                  {status || "N/A"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tracking Timeline */}
          <motion.div
            className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
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
              Tracking Timeline
            </h3>
            <div className="space-y-4">
              {histData && histData.length > 0 ? (
                histData.map((event, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === 0 ? "bg-emerald-400" : "bg-slate-500"
                        }`}
                      ></div>
                      {index < histData.length - 1 && (
                        <div className="w-px h-8 bg-slate-600 ml-1.5 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-slate-600/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">
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
                        <div className="text-sm text-slate-300 space-y-1">
                          <p>
                            <span className="text-slate-400">Time:</span>{" "}
                            {event.CreatedAt}
                          </p>
                          <p>
                            <span className="text-slate-400">Location:</span>{" "}
                            {event.userlocation}
                          </p>
                          <p>
                            <span className="text-slate-400">Updated by:</span>{" "}
                            {event.createdBy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-slate-400 text-center py-8">
                  No tracking history available
                </p>
              )}
            </div>
          </motion.div>

          {/* Detailed Status Information */}
          {narvarData && narvarData.length > 0 && (
            <motion.div
              className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-purple-400"
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
                Detailed Status Information
              </h3>
              <div className="space-y-4">
                {narvarData.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    className="bg-slate-600/30 rounded-lg p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm text-slate-400">Status</label>
                        <p
                          className={`font-medium ${
                            getStatusColor(item.Status).split(" ")[0]
                          }`}
                        >
                          {item.Status}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">
                          Status Code
                        </label>
                        <p className="text-white font-mono">
                          {item.StatusCode}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">
                          Shipment Mode
                        </label>
                        <p className="text-white">{item.ShipmentMode}</p>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">
                          Location
                        </label>
                        <p className="text-white">
                          {item.LocationName || item.CityName || "N/A"}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">State</label>
                        <p className="text-white">{item.StateName || "N/A"}</p>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">
                          Created
                        </label>
                        <p className="text-white text-sm">
                          {formatDate(item.CreatedAt)}
                        </p>
                      </div>
                      {item.DeliveryDate && (
                        <div>
                          <label className="text-sm text-slate-400">
                            Expected Delivery
                          </label>
                          <p className="text-white text-sm">
                            {formatDate(item.DeliveryDate)}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrackingResults;
