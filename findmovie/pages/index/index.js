//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:'电影T250',
    movies: [{
      name: '电影1',
      englishName: 'movie1',
      post: 'http://iph.href.lu/60x60',
      director: '导演1',
      rating: '9'
    }, {
      name: '电影2',
      englishName: 'movie2',
      post: 'http://iph.href.lu/60x60',
      director: '导演2',
      rating: '9'
    }
    ],
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
    console.log(e)
  }
})
