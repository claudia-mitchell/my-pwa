console.log("Main app logic loaded");
// you can put your blink tracker or other logic here

// Example of resizing the PWA on load
document.addEventListener("DOMContentLoaded", event => {
    const isBrowser = window.matchMedia("(display-mode: browser)").matches;
    if (!isBrowser) {
      // Move and resize the window after it has loaded
      window.moveTo(16, 16);
      window.resizeTo(800, 600);
    }
  });
  