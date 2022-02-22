


module.exports = {

  testEnvironment: 'jsdom',

  moduleFileExtensions: ['js', 'vue', 'ts'],

  // 定义别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/packages/$1'
  },
  testMatch: ['<rootDir>/tests/*.spec.ts'],
  transformIgnorePatterns: ['/node_modules/'],
  // 转义
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.ts$': 'ts-jest',
    '^.+\\.(vue)$': '@vue/vue3-jest',
  },
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      statements: 90
    }
  }

  // 单测覆盖率的文件
  // collectCoverageFrom: [
  //     "packages/**/*.{js,vue}",
  //     "!packages/**/example/*.{js,vue}",
  //     "!**/src/**",
  //     "!**/node_modules/**",
  // ],
}
