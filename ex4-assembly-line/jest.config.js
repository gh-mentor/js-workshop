// filepath: c:\Users\ascop\Documents\Training_Base\workshops\js-workshop\repo\ex4-assembly-line\jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    transform: {
      "^.+\\.ts$": ["ts-jest", { useESM: true }]
    }
  };