/*
 * @Author: yuguangzhou
 * @Date: 2022-02-17 13:54:39
 * @LastEditTime: 2022-02-22 10:36:52
 * @LastEditors: yuguangzhou
 * @Description: babel配置
 */
module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: 'current'
        }
      }],
    ]
  }