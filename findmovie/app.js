//app.js
App({
  gobalData:{
    hasLogin: false
  },
  // 应用的自定义全局方法
  fetchApi (url,callback){
    wx.request({
      url,
      data:{},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        callback(null,res.data)
      },
      fail(e){
        callback(e)
      }
    })
  }

})