
function processFlairPost(redditUserFlair, lastfmUsername) {
    const userMeta = redditUserFlair.parentElement;
    const redditUsername = userMeta.querySelector("div").innerText.trim();

    const usernames = { lastfmUsername, redditUsername };

    getUserCompatibility(usernames, (compatibilityData) => {
        const score = compatibilityData.compatibility.score;
        if (!userMeta.querySelector(".tasteometer-compat-tag")) {
            userMeta.append(createTasteometerCompatTag(score));
        }
    })
}

userFlairQuery = "shreddit-post author-flair-event-handler";

initObserver(userFlairQuery, processFlairPost);
