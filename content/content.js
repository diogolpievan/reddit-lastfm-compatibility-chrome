let usersCache = {};

chrome.storage.local.get("comparedUsers", (data) => {
  if(data.comparedUsers) {
    usersCache = data.comparedUsers;
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if(area === 'local' && changes.comparedUsers) {
    usersCache = changes.comparedUsers.newValue || {};

  }
})

function checkUserLogin() {
  chrome.runtime.sendMessage({ action: "checkLogin" }, (resp) => {
    if (resp.loggedIn) {
      console.log("Usuário logado!");
    } else {
      console.log("Usuário não está logado");
    }
  });
}

function getUserCompatibilityScrapping(username, callback) {
  chrome.runtime.sendMessage({ action: "getCompatibility", username }, (resp) => {
      if (resp){
        callback(resp);
      } else {
        console.error(resp.error);
        callback(null);
      }
    }
  );
}

function getUserInStorage(username) {
  return usersCache[username] || null;
}

const allUserFlair = document.querySelectorAll("author-flair-event-handler");

allUserFlair.forEach((redditUserFlair) => {

  const redditUserFlairText = redditUserFlair.innerText;
  const lastfmUsername = formatLastfmUserFlair(redditUserFlairText);

  const userAvatar = redditUserFlair
                      .parentElement
                      .parentElement
                      .parentElement
                      .parentElement
                      .parentElement
                      .querySelector("div[slot='commentAvatar']").querySelector('a span');
  const userMeta = redditUserFlair
                      .parentElement
                      .parentElement
                      .parentElement
                      .parentElement
                      .parentElement
                      .querySelector("div[slot='commentMeta']")

  const userData = getUserInStorage(lastfmUsername);
  if(!userData) {
    getUserCompatibilityScrapping(lastfmUsername, (data) => userData = data);
  }

  userAvatar.classList.add("tasteometer-compat-avatar");
  userAvatar.style.borderColor = getCompatibilityColor(userData.compatibility.score);

  

})
  