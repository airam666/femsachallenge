/* global __DEV__ */
const { pathsToModuleNameMapper } = require('jest');
const config = {
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
  ],
  globals: {
    __DEV__: true,
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest/setEnvVars.js'],
};

module.exports = config;
