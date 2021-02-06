// content.js
var images = document.getElementsByClassName("raven-logo");

chrome.storage.sync.get(
  {
    ravenName: "rainbow-101",
  },
  function (items) {
    for (var i = 0, l = images.length; i < l; i++) {
      images[i].src = "/images/" + items.ravenName + ".png";
    }
  }
);
