/**
 * 使用mockjs来mock数据, 提供mock数据API接口
 */
import Mock from 'mockjs'
import data from './data.json'

//注册接口
Mock.mock('/api2/libai', {
  code: 0,
  data: data.libai
})
Mock.mock('/api2/dufu', {
  code: 0,
  data: data.dufu
})

// 不用export