
function getCompatibilityColor(score) {
  const compatibilityColors = {
     "Very Low":  "#999999" ,
     "Low":       "#9900ff" ,
     "Medium":    "#009966" ,
     "High":      "#ffbb00" ,
     "Very High": "#ff6600" ,
     "Super":     "#d92323" ,
     "Not Found": "#000000"
  }

  const match = compatibilityColors[score] || "#ffffff03";
  return match;
}

function parseAndScrapUserCompatibility(html) {
  const documentHtml = new DOMParser().parseFromString(html, "text/html");
  const compatibilityScore = documentHtml.querySelector("span.tasteometer-compat-colour")?.innerText;
  const compatibilityBody  = documentHtml.querySelector(".tasteometer-body")?.innerHTML.trim();

  return {
    compatibility: {
      score: compatibilityScore || "Not Found",
      body:  compatibilityBody  || null
    }
  }
}
