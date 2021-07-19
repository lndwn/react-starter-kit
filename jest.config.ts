import { defaults } from 'jest-config'

export default {
  testEnvironment: 'jsdom',
  displayName: process.env.npm_package_name,
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/test/mocks/svgr-mock.tsx',
    '\\.(css|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/file-mock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup-after-env.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'svg'],
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/components',
    '<rootDir>/utils',
    '<rootDir>/views',
    '<rootDir>/store',
  ],
}
