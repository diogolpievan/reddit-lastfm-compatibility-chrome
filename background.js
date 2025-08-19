importScripts("utils.js");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "checkLogin") {
    fetch(`https://www.last.fm/`, { credentials: "include" })
      .then(response => response.text())
      .then(html => {
        if (!html.includes('href="/login"')) {
          sendResponse({ loggedIn: true })
        } else {
          sendResponse({ loggedIn: false })
        }
      });
    return true;
  }

  if (msg.action === "getCompatibilityScrapping") {
    fetch(`https://www.last.fm/user/${msg.username}`, { credentials: "include" })
      .then(response => response.text())
      .then(html => {
        const htmlParseFromString = htmlParser(html);
        console.log
        const userCompatData = {};

      })
      .catch(err => {
        sendResponse({ error: err.toString() });
      });
    return true;
  }

  if(msg.action === "addUserToStorage") {
    chrome.storage.local.get("comparedUsers", (data))
  }
});


