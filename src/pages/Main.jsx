import React, { useState } from "react";
import DownloadButton from "../components/DownloadButton";
import { DownloadAPIVideo } from "../controller/APIController";

const Main = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const handleDownload = async () => {
    if (url) {
      setLoading(true);
      try {
        const apiUrl = `https://api.tiklydown.eu.org/api/download`;
        await DownloadAPIVideo(url, apiUrl);
        setAlert({
          type: "success",
          message: "Video downloaded successfully.",
        });
      } catch (error) {
        setAlert({
          type: "error",
          message: "URL is Invalid",
        });
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      setAlert({
        type: "error",
        message: "Required URL to download the video",
      });
    }

    // Close the alert after 3 seconds
    setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 3000);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {
      setAlert({
        type: "error",
        message: "Failed to read/copy from clipboard",
      });
      setTimeout(() => {
        setAlert({ type: "", message: "" });
      }, 3000);
    }
  };

  return (
    <main
      className="flex flex-col items-center text-white py-16 pt-44"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dkbbweo5x/image/upload/v1721869323/KLIKMO/viber_image_2024-07-25_08-58-48-759_lxgl2h.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-16 w-[90%] max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">
          TikTok Video Downloader
        </h1>
        <p className="mb-8 text-gray-400">
          Download TikTok Videos Online. No Watermark. All devices
        </p>
        <div className="relative w-full">
          <input
            type="text"
            required
            value={url}
            onChange={(e) => {
              e.preventDefault();
              setUrl(e.target.value);
            }}
            placeholder="Enter TikTok Video Link ..."
            className="w-full px-4 py-2 rounded-l-full text-gray-200 border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-r-full"
          />
          <button
            onClick={handlePaste}
            className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-800 text-gray-300 rounded-r-full hover:bg-gray-600"
          >
            📋
          </button>
        </div>
        <DownloadButton handleDownload={handleDownload} loading={loading} />
        {alert.message && (
          <div
            className={`fixed bottom-4 right-4 p-4 rounded-lg ${
              alert.type === "success"
                ? "bg-green-100 border-l-4 border-green-500 text-green-700"
                : "bg-red-100 border-l-4 border-red-500 text-red-700"
            }`}
          >
            <div className="flex items-center">
              <svg
                className={`w-6 h-6 mr-2 ${
                  alert.type === "success" ? "text-green-500" : "text-red-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {alert.type === "success" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
              <p>{alert.message}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
