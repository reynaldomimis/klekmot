export const DownloadAPIVideo = async (url, apiUrl) => {
  const response = await fetch(`${apiUrl}?url=${url}`);
  if (!response.ok) throw new Error("Failed to download video from Tiktok");

  const result = await response.json();
  const videoUrl = result.video.noWatermark;
  const videoTitle = result.title || "downloaded_video";

  const videoResponse = await fetch(videoUrl);
  if (!videoResponse.ok) throw new Error("Failed to fetch video");

  const blob = await videoResponse.blob();
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `${videoTitle}.mp4`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
  return { success: true, message: "Video downloaded successfully." };
};
