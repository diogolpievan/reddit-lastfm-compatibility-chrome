const compatibilityColors = [
  {compatibilty: "Very Low", color: "#999"},
  {compatibilty: "Low", color: "#90f"},
  {compatibilty: "Medium", color: "#128b6c"},
  {compatibilty: "High", color: "#fb0"},
  {compatibilty: "Very High", color: "#f60"},
  {compatibilty: "Super", color: "#d92323"}
]

function checkUserCompatibility(username) {

  chrome.runtime.sendMessage({ action: "getCompatibility", username }, (resp) => {
      if (resp.html) {
        console.log(resp.html);
        const parser = new DOMParser();
        const doc = parser.parseFromString(resp.html, "text/html");
        const compat = doc.querySelector("span.tasteometer-compat-colour")?.textContent.trim();
        console.log(`Compatibilidade com ${username}:`, compat || "Not found");
      } else {
        console.error(resp.error);
      }
    }
  );
}


function checkUserLogin() {
  chrome.runtime.sendMessage({ action: "checkLogin" }, (resp) => {
    if (resp.loggedIn) {
      console.log("Usuário logado!");
    } else {
      console.log("Usuário não está logado");
    }
  });
}

checkUserCompatibility("arav3ra"); 
