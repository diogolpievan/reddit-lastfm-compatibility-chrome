import { handleMessages } from "./messages.js";

chrome.runtime.onMessage.addListener(handleMessages);

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    if(details.url.includes("r/lastfm/")) {
        chrome.scripting.executeScript({
            target: {tabId: details.tabId},
            files: [ "content/post.js"]
        })
    }  

    if(details.url.includes("comments")) {
        chrome.scripting.executeScript({
            target: {tabId: details.tabId},
            files: ["content/comments.js"]
        })
    }  
})
 