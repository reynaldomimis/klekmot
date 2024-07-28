import React from "react";

const PrivacyPolicyDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-75">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-6 lg:mx-8 xl:mx-0">
        <div className="relative p-6">
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
          <div className="flex justify-center">
            <div
              className="text-xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              KLEKMOT
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">
            Privacy Policy
          </h2>
          <div className="h-96 overflow-y-auto p-4 border border-gray-300 rounded">
            <p className="text-sm">
              <strong>1. Personal Identification Information</strong>
              <br />
              Users can visit the KLEKMOT website anonymously. We do not record
              any personal identification information unless voluntarily
              submitted by the user. Users are responsible for providing
              accurate information if they choose to submit it. We are not
              liable for any inaccuracies in the information provided.
              <br />
              <br />
              <strong>2. Advertising</strong>
              <br />
              The KLEKMOT website includes advertisements to support our ongoing
              research and development. Advertisements may be delivered by our
              advertising partners, who might use cookies. These cookies collect
              non-personal information and do not track personal details such as
              your name, email address, or physical address. You can choose to
              reject cookies or discontinue use of our website at any time.
              Accepting ads is not mandatory for using KLEKMOT.
              <br />
              <br />
              <strong>3. Donations</strong>
              <br />
              If you wish to support KLEKMOT, you can choose to buy us a coffee
              as a form of donation. This is entirely voluntary and helps us
              maintain and improve the website.
              <br />
              <br />
              <strong>4. Changes to This Privacy Policy</strong>
              <br />
              We may update this privacy policy at any time. When changes occur,
              we will post a notification on the main page of the KLEKMOT
              website and update the date at the top of this page. We encourage
              users to review this policy periodically to stay informed about
              how we protect your information. Continued use of the website
              following changes constitutes acceptance of the updated policy.
              <br />
              <br />
              <strong>5. Your Acceptance of These Terms</strong>
              <br />
              By accessing and using the KLEKMOT website, you agree to this
              privacy policy. If you do not agree, please do not use our
              services. Your continued use of the services after changes to this
              policy will be considered as acceptance of those changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyDialog;
