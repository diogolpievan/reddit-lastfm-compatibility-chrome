import { handleMessages } from "./messages";

chrome.runtime.onMessage.addListener(handleMessages);
