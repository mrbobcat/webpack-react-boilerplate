const { defaults } = require("jest-config");

module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/testSetup.js",
  moduleNameMapper: {
    ...defaults.moduleNameMapper,
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
