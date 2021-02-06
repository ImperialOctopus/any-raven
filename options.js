function save_options() {
  var ravenName = document.getElementById("ravenSelector").value;
  chrome.storage.sync.set({
    ravenName: ravenName,
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      ravenName: "gqven-101",
    },
    function (items) {
      document.getElementById("ravenSelector").value = items.ravenName;
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  restore_options();
  document
    .getElementById("ravenSelector")
    .addEventListener("change", save_options);
});
