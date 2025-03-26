const uriHelpers = (() => {
  const formatStringForUrl = (string: string) =>
    string.replace(/\s+/g, "-").toLowerCase();
  const formatUrlToString = (string: string | undefined) =>
    string?.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const decodeUri = (string: string) => decodeURIComponent(string);

  const extractIdFromUrl = (url: string) => {
    const idMatch = url.match(/-(\d+)$/);
    return idMatch ? idMatch[1] : null;
  };

  return {
    formatStringForUrl,
    decodeUri,
    formatUrlToString,
    extractIdFromUrl,
  };
})();

export default uriHelpers;
