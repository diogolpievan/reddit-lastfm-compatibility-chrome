let usersCache = {};

chrome.storage.local.get("comparedUsers", (data) => {
  if (data.comparedUsers) {
    usersCache = data.comparedUsers;
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.comparedUsers) {
    usersCache = changes.comparedUsers.newValue || {};
  }
})
