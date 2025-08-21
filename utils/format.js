function formatLastfmUserFlair(userFlair) {
    if (userFlair.includes("/")) {
      const splittedUrl = userFlair.split("/");
      const lastfmUsername = splittedUrl[splittedUrl.length - 1] == '' ? splittedUrl[splittedUrl.length - 2] : splittedUrl[splittedUrl.length - 1];
      return lastfmUsername;
    }
    if (userFlair.includes(" ")) {
      const splittedUrl = userFlair.split(" ");
      const lastfmUsername = splittedUrl[splittedUrl.length - 1] == '' ? splittedUrl[splittedUrl.length - 2] : splittedUrl[splittedUrl.length - 1];
      return lastfmUsername;
    }
    return userFlair;
}
