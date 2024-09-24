// file: jest.config.js
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"], // <= setup file here
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
