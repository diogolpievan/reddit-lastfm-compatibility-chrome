import scrapeIt from "scrape-it";
import ScrappedData from "../types/scrapped-data";

export async function getUserCompatibilityScrapping(username: string): Promise<ScrappedData> {
  const response = await fetch(`https://www.last.fm/user/${username}/`, { credentials: 'include'});
  const html = await response.text();

  const scrappedCompatibility = scrapeIt.scrapeHTML<ScrappedData>(html, {
    score: {
      selector: "span.tasteometer-compat-colour",
      how: "text"
    },
    body: {
      selector: ".tasteometer-body",
      how: "html"
    }
  });

  return scrappedCompatibility;
}
