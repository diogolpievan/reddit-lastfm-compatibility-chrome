document.getElementById("check").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  chrome.runtime.sendMessage(
    { action: "getCompatibility", username: user },
    (resp) => {
      if (resp.html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(resp.html, "text/html");
        const compat = doc
          .querySelector(".tasteometer-body")
          ?.textContent.trim();
        document.getElementById("result").textContent =
          compat || "Não encontrado";
      } else {
        document.getElementById("result").textContent = "Erro: " + resp.error;
      }
    }
  );
});
