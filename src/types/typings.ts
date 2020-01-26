import { devDependencies } from '../../package.json'

export const typings = Object.keys(devDependencies).filter((key) =>
  key.startsWith('@types/')
)
