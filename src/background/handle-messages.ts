import { getUserCompatibilityScrapping } from "./scrapping";
import { saveUserInStorage } from "./storage";

export function handleMessages(
  message: any,
  sender: any,
  sendResponse: (response?: any) => void
) {
  switch (message.action) {
    case "getUserCompatibilityScrapping":
      getUserCompatibilityScrapping(message.username)
        .then((compatibilityData) => sendResponse({ data: compatibilityData }))
        .catch((err) => sendResponse({ error: err.message }));

      return true;

    case "saveUserInStorage":
      saveUserInStorage(message.comparedUser)
        .then((success) => sendResponse(success))
        .catch((error) => sendResponse({ error: error.message }));
    default:
      sendResponse({ error: "Action not exist" });
  }
}
