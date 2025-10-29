console.log("Main app logic loaded");
// you can put your blink tracker or other logic here

window.addEventListener('load', () => {
    // Only trigger this if not already inside a popup or PWA
    if (window.innerWidth > 600 && !window.matchMedia('(display-mode: standalone)').matches) {
      window.open(window.location.href, 'pwaPopup', 'width=800,height=500');
      window.close(); // optional: close the original tab
    }
  });
  