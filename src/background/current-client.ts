import Browser from "webextension-polyfill";
import { checkLogin } from "./login";
import { getCurrentClientUsername } from "./scrapping";

export async function getCurrentClientStorage() {
  if (await checkLogin()) {
    const { currentClient } = await Browser.storage.session.get(
      "currentClient"
    );
    if (!currentClient) {
      const currentClient = await getCurrentClientUsername();
      saveCurrentClientStorage(currentClient);
    }
  }
}

function saveCurrentClientStorage(lastfmUsername: string) {
  Browser.storage.session.set({ currentClient: lastfmUsername });
}
