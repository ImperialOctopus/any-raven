function save_options() {
  var ravenName = document.querySelector("input[name=raven]:checked").value;
  chrome.storage.sync.set({
    ravenName: ravenName,
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      ravenName: "none",
    },
    function (item) {
      document
        .querySelectorAll('input[type="radio"][name="raven"]')
        .forEach((element) => {
          if (element.value === item.ravenName) {
            element.checked = true;
          }
        });
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  restore_options();
  document
    .querySelectorAll('input[type="radio"][name="raven"]')
    .forEach((element) => {
      element.onclick = save_options;
    });
});
