import scrapeIt from "scrape-it";
import ScrappedData from "../types/scrapped-data";
import { CompatibilityScore } from "../types/compatibility";

export async function getCurrentClientUsername(): Promise<string> {
  const response = await fetch(`https://www.last.fm/`, {
    credentials: "include",
  });
  const html = await response.text();

  const currentClientUsername = scrapeIt.scrapeHTML<string>(html, {
    username: {
      selector: ".auth-dropdown-profile-info.username",
      how: "text",
    },
  });
  return currentClientUsername;
}

export async function getUserCompatibilityScrapping(
  username: string
): Promise<ScrappedData> {
  const response = await fetch(`https://www.last.fm/user/${username}/`, {
    credentials: "include",
  });
  const html = await response.text();

  const scrappedCompatibility = scrapeIt.scrapeHTML<{
    score: string | "Not Found";
    body: string | null;
  }>(html, {
    score: {
      selector: "span.tasteometer-compat-colour",
      how: "text",
    },
    body: {
      selector: ".tasteometer-body",
      how: "html",
    },
  });

  return {
    compatibility: {
      score: scrappedCompatibility.score as CompatibilityScore,
      body: scrappedCompatibility.body,
    },
  };
}
