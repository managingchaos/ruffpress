document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("ruffpress-video");
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  const tryPlay = () => {
    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {
        // Silent fail if browser blocks autoplay
      });
    }
  };

  tryPlay();
  window.addEventListener("load", tryPlay);

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) tryPlay();
  });
});
