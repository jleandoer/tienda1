/** @type {import('jest').Config} */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.spec.json');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs', 'jsx'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  transform: {
    '^.+\\.(ts|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(@angular|@ionic|@stencil|rxjs)/)'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text', 'cobertura','json-summary'],
};
