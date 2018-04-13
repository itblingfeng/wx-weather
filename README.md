# wx-weather
微信天气小程序
![weather](https://raw.githubusercontent.com/itblingfeng/img-folder/master/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-04-12%20%E4%B8%8B%E5%8D%8810.43.03.png)
![weather_ui](https://raw.githubusercontent.com/itblingfeng/img-folder/master/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-04-13%20%E4%B8%8B%E5%8D%881.10.52.png)
UI来源：禾佑汐- <a href="http://www.zcool.com.cn/work/ZMTkxMTA2NjQ=.html">http://www.zcool.com.cn/work/ZMTkxMTA2NjQ=.html </a>

![weather_ui](https://raw.githubusercontent.com/itblingfeng/img-folder/master/01862058325cada801219c7711c390.gif%402o%20(1).png)

天气api使用的是和风天气api,目前仅能显示3日内的天气(开发者正在认证中，可显示7日内天气)

使用方式：
```
$ git clone https://github.com/itblingfeng/wx-weather.git
 微信开发者工具打开wx-weather文件夹即可
```
修改Page->index->index.js
```
wx.request({
           url: 'https://free-api.heweather.com/s6/weather/now?location=' + data.longitude + ',' + data.latitude + '&key=xxx',
            success:function(res){}
```
将xxx改为你的和风天气的key即可使用

##天气图标

   - 晴
   - 多云
   - 阴
   - 阵雨
   - 雷阵雨	
   - 小雨
   - 中雨	
   - 大雨	
   - 暴雨
   - 大暴雨	
   - 小雪	
   - 中雪	
   - 大雪
   - 暴雪
   - 雨夹雪	
   - 雾
   - 霾
   - 沙尘暴	