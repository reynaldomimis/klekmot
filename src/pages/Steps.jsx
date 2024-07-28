import React from "react";

const stepsData = [
  {
    number: 1,
    text: "Open the TikTok app on your phone or on the web in your browser.",
    imgSrc:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1721889057/KLIKMO/iuaksbbxaxcvvocceqda.png",
    altText: "Step 1",
  },
  {
    number: 2,
    text: "Search for the video or select the one you want to download.",
    imgSrc:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1722056167/image_irnq2t.png",
    altText: "Step 2",
  },
  {
    number: 3,
    text: "Click the Share button at the bottom right for Android.",
    imgSrc:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1722056464/image_lv3kh3.png",
    altText: "Step 3",
  },
  {
    number: 4,
    text: "Click the Copy Link button to get the URL of the video for the website.",
    imgSrc:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1722056308/image_am7ub9.png",
    altText: "Step 4",
  },
  {
    number: 5,
    text: "Paste your download link into the field above and click the Download button.",
    imgSrc:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1722055458/image_a1i39b.png",
    altText: "Step 5",
  },
  {
    number: 6,
    text: "Wait for our server to do its job, and then save the video to your device.",
    imgSrc:
      "https://res.cloudinary.com/dkbbweo5x/image/upload/v1722055327/image_wyui2v.png",
    altText: "Step 6",
  },
];

const Steps = () => {
  return (
    <section className=" bg-gray-950 text-white xl:p-16 md:p-8 xs:px-3 xs:py-3 w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-3 mt-8 text-center text-white xs:text-2xl">
        Simple Steps to Download TikTok Videos Without Watermark with KLEKMOT
      </h2>
      <h6 className="text-xl font-medium mb-8 text-center text-gray-400 xs:text-sm">
        Follow these straightforward steps to download high-quality,
        watermark-free TikTok videos using KLEKMOT
      </h6>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full xs:gap-4 xs:w-full">
        {stepsData.map(({ number, text, imgSrc, altText }) => (
          <li
            key={number}
            className="bg-gray-900 p-4 rounded-lg shadow-lg xs:w-full"
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-2xl font-bold bg-blue-500 text-white p-4 w-10 h-10 flex items-center justify-center rounded-full xs:w-8 xs:h-8">
                {number}
              </span>
              <p>{text}</p>
            </div>
            <img
              src={imgSrc}
              alt={altText}
              className="w-full mb-2 rounded-lg"
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Steps;
