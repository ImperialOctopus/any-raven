// content.js

var replaceRavens = function () {
  chrome.storage.sync.get(
    {
      ravenName: "rainbow",
    },
    function (items) {
      // Replace big raven.
      $(".campl-content-container > .raven-logo").attr(
        "src",
        "/images/" + items.ravenName + "-101.png"
      );

      // Replace login raven.
      $("fieldset > .raven-logo").attr(
        "src",
        "/images/" + items.ravenName + "-51.png"
      );
    }
  );
};

replaceRavens();

chrome.storage.onChanged.addListener(function (changes, namespace) {
  replaceRavens();
});
