import Browser from "webextension-polyfill";
import LastfmUser from "../entities/LastfmUser";

export async function saveScrappedUserInStorage(lastfmUser: LastfmUser) {
  const storageData = await Browser.storage.local.get("");
}
