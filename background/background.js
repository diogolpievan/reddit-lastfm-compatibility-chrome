import { handleMessages } from "./messages.js";

chrome.runtime.onMessage.addListener(handleMessages);
