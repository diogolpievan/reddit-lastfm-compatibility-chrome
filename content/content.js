
function checkUserLogin() {
  chrome.runtime.sendMessage({ action: "checkLogin" }, (resp) => {
    if (resp.logged) {
      return true;
    } else {
      return false;
    }
  });
}

let isLogged = checkUserLogin();
const clientLastfmUsername = '';

function getUserCompatibility(usernames, callback) {

  if (usersCache[usernames.lastfmUsername]) {
    console.log("get of cache")
    callback(usersCache[usernames.lastfmUsername]);
  } else {
    console.log("get of scrapp")
    const { lastfmUsername } = usernames;
    chrome.runtime.sendMessage({ action: "getUserCompatibilityScrapping", username: lastfmUsername }, (resp) => {

      if (resp.html) {
        const scrappedCompatibilityData = parseAndScrapUserCompatibility(resp.html);

        const comparedUser = {
          ...usernames,
          ...scrappedCompatibilityData
        };

        callSaveUserInStorage(comparedUser);
        callback(scrappedCompatibilityData);
      } else {
        console.error(resp.error);
      }
    });
  }
}

function callSaveUserInStorage(comparedUser) {
  chrome.runtime.sendMessage({ action: "saveComparedUser", comparedUser }, (resp) => {

  })
}

let userFlairQuery = '';
