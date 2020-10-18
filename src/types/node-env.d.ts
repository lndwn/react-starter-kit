declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined
    NODE_ENV: 'development' | 'production' | 'test'
    SENTRY_RELEASE: string
    VERSION: string
    COMMITHASH: string
    BRANCH: string
    BROWSERSLIST_ENV: string
    npm_package_name: string
    npm_package_version: string
  }
}
