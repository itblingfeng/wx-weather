
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    flag: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    const ctx = wx.createCanvasContext('myCanvas1')
    this.grad(ctx, 'rgb(241, 110, 118)', 'rgb(245,141,121)')
    ctx.setFontSize(15)
    ctx.setFillStyle('white')
    ctx.fillText('Nanjing', 80, 120)
    ctx.fillText('Monday，Sunday', 40, 150)
    ctx.setFontSize(70)
    ctx.fillText('32°',70,240)
    ctx.draw()
    
    setInterval(function () {
      if(_this.data.flag){
        if (_this.data.count==3){
          _this.setData({
            count: _this.data.count - 1,
            flag: false
          })
        }else{
          _this.setData({
            count: _this.data.count + 1,
          })
        }
     
      }else{
        if (_this.data.count==1){
          _this.setData({
            count: _this.data.count - 1,
            flag: true
          })
        }else{
          _this.setData({
            count: _this.data.count - 1,
          })
        }
      }
    }, 800)
    
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