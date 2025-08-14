chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getCompatibility") {
    fetch(`https://www.last.fm/user/${msg.username}`, {  credentials: "include" })
      .then(response => response.text())
      .then(html => {
        sendResponse({ html });
      })
      .catch(err => {
        sendResponse({ error: err.toString() });
      });
    return true;
  }

  if(msg.action === "checkLogin") {
    fetch(`https://www.last.fm/`, {  credentials: "include" })
        .then(response => response.text())
        .then(html => {
            if(!html.includes('href="/login"')) {
                sendResponse({loggedIn: true})
            } else {
                sendResponse({loggedIn: false})
            }
        });
    return true;
    }
});


