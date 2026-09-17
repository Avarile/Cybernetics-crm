// Must be absolute: getImageAbsoluteURI rewrites relative paths to the
// server's /files endpoint, but this asset is served by the frontend.
export const DEFAULT_WORKSPACE_LOGO = `${window.location.origin}/images/icons/android/android-launchericon-192-192.png`;
