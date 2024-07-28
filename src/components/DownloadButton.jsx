import React from "react";

const DownloadButton = ({ handleDownload, loading }) => {
  return (
    <button
      onClick={handleDownload}
      className={`styled-button ${
        loading ? "disabled opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4h4a8 8 0 01-8 8v-4z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        "DOWNLOAD"
      )}
    </button>
  );
};

export default DownloadButton;
