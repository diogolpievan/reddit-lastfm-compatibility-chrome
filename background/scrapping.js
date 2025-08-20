export async function getCompatibilityScrapping(username) {
    try {
        const response = await fetch(`https://www.last.fm/user/${username}`, { credentials: "include" });
        const html = await response.text();
        return html;

    } catch (error) {
        return {error};
    }
}
