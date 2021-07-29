const path = require("path");

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "@test/(.*)$": "<rootDir>/test/$1",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
