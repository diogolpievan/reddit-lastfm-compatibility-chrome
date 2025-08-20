export async function checkLogin() {
    try {
        const response = await fetch(`https://www.last.fm/`, { credentials: "include" });
        const html = await response.text();

        if (!html.includes('href="/login"')) return true;
        return false;
    } catch (error) {
        return error.message;
    }
}
