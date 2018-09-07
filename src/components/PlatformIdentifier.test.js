import getPlatfrom from "./PlatformIdentifier"

test("returns 64 bit values by default", () => {
    const assume32bit = false;
    expect(getPlatfrom("Win32", assume32bit)).toEqual("win64")
    expect(getPlatfrom("Linux", assume32bit)).toEqual("linux64")
})

test("returns 32 bit values when asked to", () => {
    const assume32bit = true;
    expect(getPlatfrom("Win32", assume32bit)).toEqual("win32")
    expect(getPlatfrom("Linux", assume32bit)).toEqual("linux32")
})