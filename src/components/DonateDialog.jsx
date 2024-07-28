import React from "react";

const DonateDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-75">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-6 lg:mx-8 xl:mx-0">
        <div className="relative p-3">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Support Us
            </h2>
            <p className="text-sm text-gray-400">
              If you enjoy using Klikmo and would like to support us, you can
              buy us a coffee or donate using Bitcoin.
            </p>
          </div>
          <div className="space-y-4 p-4">
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                  alt="PayPal"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Donate via PayPal
                  </h3>
                  <p className="text-sm text-gray-400">
                    Support us through PayPal.
                  </p>
                </div>
              </div>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Donate
              </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://static-00.iconduck.com/assets.00/bitcoin-icon-2048x2048-t8gwld81.png"
                  alt="Bitcoin"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Donate via Bitcoin
                  </h3>
                  <p className="text-sm text-gray-400">
                    Support us with Bitcoin.
                  </p>
                </div>
              </div>
              <a
                href="bitcoin:YOUR_BITCOIN_ADDRESS"
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateDialog;
