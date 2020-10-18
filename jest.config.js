// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config')

module.exports = {
  displayName: process.env.npm_package_name,
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/test/mocks/svgr-mock.tsx',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/file-mock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'svg'],
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/components',
    '<rootDir>/utils',
    '<rootDir>/views',
    '<rootDir>/store',
  ],
}
