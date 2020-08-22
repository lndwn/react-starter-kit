const { defaults } = require('jest-config')
const { name } = require('./package.json')

module.exports = {
  displayName: name,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: require('./babel.config.js'),
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'svg'],
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [],
}
