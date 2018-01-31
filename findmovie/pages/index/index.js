//index.js
//获取应用实例
const app = getApp();

const API_URL = 'https://api.douban.com/v2/movie/top250';

Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
    start: 0,
    count: 20
  },

  onLoad () {
    // 调用全局实例方法获取全局数据
    app.fetchApi(API_URL+`?start=${this.data.start}&count=${this.data.count}`, (err,data) => {
      // 更新数据
      this.setData({title:'豆瓣电影Top250', movies: data.subjects})
    })
  }
})
