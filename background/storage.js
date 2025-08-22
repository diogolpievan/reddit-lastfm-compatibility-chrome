
export async function saveComparedUser(comparedUser) {
    const data = await chrome.storage.local.get("comparedUsers");

    const comparedUsers = data.comparedUsers || {};
    comparedUsers[comparedUser.lastfmUsername] = {
        redditUsername: comparedUser.redditUsername,
        compatibility: comparedUser.compatibility
    };

    await chrome.storage.local.set({ comparedUsers: comparedUsers });
    return { success: true };
}

