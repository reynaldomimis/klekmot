import React from "react";
import ShareButton from "../components/ShareButton";

const Toolbar = ({ page, title, text }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 text-white z-50 gradient-border">
      <div className="max-w-7xl mx-auto py-4 px-5 flex justify-between items-center">
        <div
          className="text-xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          KLEKMOT
        </div>
        <div className="space-x-3">
          <ShareButton url={page} title={title} text={text} />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
