function initObserver(userFlairQuery, processeUserFlair) {
    const processedUsers = new Set();

    const observer = new MutationObserver(() => {
        document.querySelectorAll(userFlairQuery).forEach(redditUserFlair => {

            const redditUserFlairText = redditUserFlair.innerText.trim();
            const lastfmUsername = formatLastfmUserFlair(redditUserFlairText);

            if (!processedUsers.has(redditUserFlair)) {
                processedUsers.add(redditUserFlair);
                linkingLastfmUsername(redditUserFlair, lastfmUsername);

                processeUserFlair(redditUserFlair, lastfmUsername);
            }
        })
    })

    observer.observe(document.body, { childList: true, subtree: true });
}
