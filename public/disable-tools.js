document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 123) {
      // F12
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
      // Ctrl+Shift+I
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
      // Ctrl+Shift+J
      e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
      // Ctrl+U
      e.preventDefault();
    }
  });
});
