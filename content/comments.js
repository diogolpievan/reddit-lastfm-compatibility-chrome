
function processFlairComments(redditUserFlair, lastfmUsername) {
    const userAvatar = redditUserFlair
        .closest("shreddit-comment")
        .querySelector("div[slot='commentAvatar'] a span");

    const userMeta = redditUserFlair
        .parentElement
        .parentElement
        .children[0];

    const redditUsername = userMeta.querySelector("div").innerText.trim();

    const usernames = { lastfmUsername, redditUsername };

    getUserCompatibility(usernames, (compatibilityData) => {
        const score = compatibilityData.compatibility.score;

        if (!userAvatar.classList.contains("tasteometer-compat-avatar")) {
            renderBorderColor(userAvatar, score);
        }
        if (!userMeta.querySelector(".tasteometer-compat-tag")) {
            userMeta.append(createTasteometerCompatTag(score));
        }
    })
}

userFlairQuery = "shreddit-comment author-flair-event-handler";
initObserver(userFlairQuery, processFlairComments);
