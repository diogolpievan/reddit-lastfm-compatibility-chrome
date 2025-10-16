import ScrappedData from "../types/scrapped-data";

export default class LastfmUser {
  constructor(
    public username: string,
    public redditUsername: string,
    public compatibility?: ScrappedData,
    public lastUpdate?: Date
  ) {}
}
