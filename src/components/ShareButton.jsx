import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ShareButton = ({ url, title, text }) => {
  const handleShare = () => {
    // Add your share logic here
    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .catch(console.error);
    } else {
      // Fallback logic
      alert("Share functionality is not supported on this device.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 px-3 rounded-full  hover:bg-blue-600 text-white"
      aria-label="Share"
    >
      <FontAwesomeIcon icon={faShareAlt} />
    </button>
  );
};

export default ShareButton;
