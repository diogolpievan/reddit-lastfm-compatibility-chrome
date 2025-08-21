export async function getUserCompatibilityScrapping(username) {
    const response = await fetch(`https://www.last.fm/user/${username}`, { credentials: "include" });
    const html = await response.text();
    return html;
}
