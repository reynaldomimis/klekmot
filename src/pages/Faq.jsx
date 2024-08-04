import React from "react";

const Faq = () => {
  return (
    <section className="bg-gray-950 text-white xl:px-16 md:p-8 xs:px-3 xs:py-3 flex justify-center">
      <div className="w-4/5 xl:p-8 xs:w-full xs:p-4 rounded-lg shadow-lg bg-gray-950">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          <details className="p-4 border border-gray-600 rounded-lg bg-gray-950">
            <summary className="font-semibold cursor-pointer text-white">
              How to Download TikTok video without watermark?
            </summary>
            <p className="mt-2 text-gray-400">
              Open the TikTok app on your phone or web browser. <br />
              Choose the video you want to download.
              <br /> Click the Share button at the bottom right. <br />
              Click the Copy Link button. <br /> Go back to KLEKMOT and paste
              your download link in the field above, then click the Download
              button. <br /> Wait for our server to process your request and
              save the video to your device.
            </p>
          </details>
          <details className="p-4 border border-gray-600 rounded-lg bg-gray-950">
            <summary className="font-semibold cursor-pointer text-white">
              How to get the TikTok video download link?
            </summary>
            <p className="mt-2 text-gray-400">
              Open the TikTok application and choose the video you want to
              download. Click Share, then find the Copy Link button in the Share
              options. Your download URL will be copied to the clipboard.
            </p>
          </details>
          <details className="p-4 border border-gray-600 rounded-lg bg-gray-950">
            <summary className="font-semibold cursor-pointer text-white">
              Where are TikTok videos saved after being downloaded?
            </summary>
            <p className="mt-2 text-gray-400">
              Downloaded files are usually saved in the default download folder
              for your downloaded TikTok videos.
            </p>
          </details>
          <details className="p-4 border border-gray-600 rounded-lg bg-gray-950">
            <summary className="font-semibold cursor-pointer text-white">
              Can I use KLEKMOT on my mobile phone?
            </summary>
            <p className="mt-2 text-gray-400">
              Yes, you can use KLEKMOT to save TikTok videos without watermarks
              on your mobile phone.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
