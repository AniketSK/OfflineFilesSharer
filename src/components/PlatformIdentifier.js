/**
 * A lot of browsers lie about what this value is.
 * Particularly, it's prone to false positives about whether the platform is
 * 32 bit or 64bit.
 * Therefore, assume that everyone is actually running on 64 bit.
 */
export default function getPlatform() {
  const platform = window.navigator.platform;
  if (platform.startsWith("Win")) {
    return "win64";
  } else if (platform.startsWith("Mac")) {
    return "mac";
  } else if (platform.startsWith("Linux")) {
    return "linux64";
  } else {
    return "unknown";
  }
}
