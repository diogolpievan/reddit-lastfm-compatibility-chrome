export async function checkLogin() {
    const response = await fetch(`https://www.last.fm/`, { credentials: "include" });
    const html = await response.text();
    return !html.includes('href="/login"');
}
