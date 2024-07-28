import React from "react";

const TermsDialog = ({ isOpen, onClose }) => {
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
              KLIKMO
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">
            Terms and Conditions
          </h2>
          <div className="h-96 overflow-y-auto p-4 border border-gray-300 rounded">
            <p className="text-sm">
              By using Klikmo, you agree to the following terms and conditions:
              <br />
              <br />
              This document outlines the terms and conditions (“Terms”) under
              which Klikmo (“we” or “us”) provides its services to you on its
              websites, including but not limited to the websites listed above
              (collectively, the “Website”). By accessing or using the Website,
              you acknowledge and accept these Terms. The terms “you” or “your”
              refer to you, any entity you represent, and any of your devices.
              If you do not agree with these Terms, please leave the Website and
              discontinue using it.
              <br />
              <br />
              <strong>1. Eligibility</strong>
              <br />
              a. You must be at least eighteen (18) years of age to use the
              Website, or meet the age of majority in your jurisdiction if it is
              greater than eighteen (18). The use of the Website is prohibited
              where it is not allowed by law.
              <br />
              b. By accepting these Terms, you acknowledge that our provision of
              permission to use the Website is sufficient consideration for your
              acceptance of these Terms.
              <br />
              <br />
              <strong>2. Use of the Website</strong>
              <br />
              a. We grant you a non-exclusive, non-transferable, and limited
              right to access and use the Website solely for the purpose of
              downloading TikTok videos without watermarks. This right is for
              personal and non-commercial use only.
              <br />
              b. You agree not to misuse or attempt to misuse the Website in any
              manner. This includes, but is not limited to, attempting to access
              restricted areas of the Website or using the Website to download
              content in a way that is not consistent with these Terms.
              <br />
              <br />
              <strong>3. Intellectual Property</strong>
              <br />
              a. The content available on the Website, including text, images,
              videos, and other materials (collectively “Proprietary
              Materials”), is owned by us or our licensors. All Proprietary
              Materials are protected by copyright, trademark, and other
              intellectual property laws. We reserve all rights to our
              Proprietary Materials.
              <br />
              b. You agree not to copy, modify, distribute, or create derivative
              works based on any Proprietary Materials, except as expressly
              permitted by these Terms.
              <br />
              <br />
              <strong>4. Privacy and Data Collection</strong>
              <br />
              We do not collect any personal data from users. Your use of the
              Website is solely for downloading TikTok videos without
              watermarks, and we do not track or collect any information about
              your usage.
              <br />
              <br />
              <strong>5. Termination</strong>
              <br />
              We reserve the right to terminate or suspend your access to the
              Website at any time, with or without cause or notice, if you
              violate these Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsDialog;
