import config from "./config";

const expectedTypes = ["mac", "win32", "win64", "linux32", "linux64", "name"];

it("All workshop dependencies are available for all os/arch combinations", () => {
  config.dependencies.forEach(hasExactlyValidTypes);
});

const hasExactlyValidTypes = dep => {
  expectedTypes.forEach(expectedType => {
    if (!dep[expectedType]) {
      throw new Error(`Required key "${expectedType}" missing in dependency ${JSON.stringify(dep)}`);
    }
  });
  expect(Object.keys(dep).length).toBe(expectedTypes.length)
};
