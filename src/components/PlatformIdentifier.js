/**
 * A lot of browsers lie about what this value is.
 * Particularly, it's prone to false positives about whether the platform is
 * 32 bit or 64bit.
 * Therefore, assume that everyone is actually running on 64 bit.
 * Needs window.navigator.platform as the platform value.
 */
export default function getPlatform(platform, assume32bit) {
  if (platform.startsWith("Win")) {
    return assume32bit ? "win32": "win64";
  } else if (platform.startsWith("Mac")) {
    return "mac";
  } else if (platform.startsWith("Linux")) {
    return assume32bit ? "linux32" : "linux64";
  } else {
    return "unknown";
  }
}
