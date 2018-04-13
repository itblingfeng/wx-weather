
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    flag: true,
    latitude:null,
    location:null,
    longitude:null,
    week:[
      'Mon','Tue','Wed','Thu','Fri','Sat','Sun'
    ],
    week_index:null,
    daily_forecast:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getLocation({
      success: function(data) {
        _this.setData({
          longitude: data.longitude,
          latitude: data.latitude
        })
        //请求天气
        wx.request({
          url: 'https://free-api.heweather.com/s6/weather/forecast?location=' + data.longitude + ',' + data.latitude +'&key=xxx',
          success:function(res){
            var forecast = res.data.HeWeather6[0].daily_forecast
            var week_index = []
            for(var i=0;i<forecast.length;i++){
              var date = new Date(forecast[i].date)
              week_index.push(date.getDay())
            }
            _this.setData({
              week_index: week_index,
              location: res.data.HeWeather6[0].basic.location,
              daily_forecast: forecast
            })
            wx.request({
              url: 'https://free-api.heweather.com/s6/weather/now?location=' + data.longitude + ',' + data.latitude + '&key=xxx',
              success:function(res){
                var tmp = res.data.HeWeather6[0].now.tmp+"℃"
                const ctx = wx.createCanvasContext('myCanvas1')
                var cond_code = res.data.HeWeather6[0].now.cond_code
                if (cond_code == 100 || cond_code == 101 || cond_code == 102 || cond_code == 103){
                  _this.grad(ctx, 'rgb(241,110,118)','rgb(245,141,121)')
                }else{
                  _this.grad(ctx, 'rgb(78,104,133)', 'rgb(226,220,214)')
                  wx.setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: '#4E6885',
                  })
                }
                ctx.setFontSize(15)
                ctx.setFillStyle('white')
                ctx.fillText(res.data.HeWeather6[0].basic.location, 80, 120)
                var date = new Date();
                var weekNum = date.getDay();
                var week = null;
                switch (weekNum) {
                  case 0: week = '周日'; break;
                  case 1: week = '周一'; break;
                  case 2: week = '周二'; break;
                  case 3: week = '周三'; break;
                  case 4: week = '周四'; break;
                  case 5: week = '周五'; break;
                  case 6: week = '周六'; break;
                }
                ctx.fillText(week + '，' + res.data.HeWeather6[0].now.cond_txt, 80, 150)
                ctx.setFontSize(70)
                ctx.fillText(tmp, 70, 240)
                ctx.draw()
              }
            })
           
          
          }
        })

      },
    })


    
    
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  casDrawImage: function (ctx, imageUrl) {
    ctx.drawImage(imageUrl, 0, 187, 390, 300)
  },
  grad: function (ctx, color, colorstop) {
    // 创建线性渐变
    const grd = ctx.createLinearGradient(0, 0, 0, 400)
    grd.addColorStop(0, color)
    grd.addColorStop(1, colorstop)
    ctx.setFillStyle(grd)
    ctx.fillRect(0, 0, 400, 600)
  },
  
})