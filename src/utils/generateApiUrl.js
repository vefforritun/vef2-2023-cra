export function generateApiUrl(path) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = new URL(path, baseUrl);

  console.log('url', url);

  return url;
}
