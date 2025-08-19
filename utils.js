
function getCompatibilityColor(score) {
  const compatibilityColors = [
    { "Very Low":  "#999999" },
    { "Low":       "#9900ff" },
    { "Medium":    "#128b6c" },
    { "High":      "#ffbb00" },
    { "Very High": "#ff6600" },
    { "Super":     "#d92323" }
  ]

  const match = compatibilityColors[score] || "#ffffff03";
  return match;
}

function htmlParser(htmlString) {
  const parser = new DOMParser();
  return parser.parseFromString(htmlString, "text/html");
}

function formatLastfmUserFlair(userFlair) {
    if (userFlair.includes("/")) {
      const splittedUrl = userFlair.split("/");
      const lastfmUsername = splittedUrl[splittedUrl.length - 1] == '' ? splittedUrl[splittedUrl.length - 2] : splittedUrl[splittedUrl.length - 1];
      return lastfmUsername;
    }
    return userFlair;
}
