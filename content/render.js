
function renderBorderColor(userAvatarElement, score) {
    userAvatarElement.classList.add("tasteometer-compat-avatar");
    userAvatarElement.style.borderColor = getCompatibilityColor(score);
}

function createTasteometerCompatTag(score) {
  const compatColor = getCompatibilityColor(score)
  const div = document.createElement("DIV");
  div.classList.add("tasteometer-compat-tag");
  div.style.borderColor = compatColor;
  div.style.backgroundColor = compatColor;
  div.textContent = score;

  return div;
}

function linkingLastfmUsername(userFlairElement, lastfmUsername) {
  const div = userFlairElement.querySelector("span div");
  const a = document.createElement("a");

  a.href = `https://www.last.fm/user/${lastfmUsername}`;
  a.target = "_blank";
  a.textContent = div.innerText;
  div.innerHtml = '';
  div.innerText = '';

  div.append(a);
  a.style.color = "#000";
}
