function save_options() {
  console.log("Save");
  var ravenName = document.querySelector("input[name=raven]:checked").value;
  console.log(ravenName);
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
      document.querySelector(`input[name=raven][value=${item}]:checked`).value =
        items.ravenName;
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  restore_options();
  document
    .querySelector("input[name=raven]")
    .addEventListener("change", save_options);
});
