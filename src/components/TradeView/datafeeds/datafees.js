/**
 * JS API
 */
import dataUpdater from './dataUpdater'
import axios from 'axios'
class datafeeds {

  /**
   * JS API
   * @param {*Object} vue vue实例
   */
  constructor(vue) {
    this.self = vue
    this.barsUpdater = new dataUpdater(this)
  }

  /**
   * @param {*Function} callback  回调函数
   * `onReady` should return result asynchronously.
   */
  onReady(callback) {
    return new Promise((resolve, reject) => {
      let configuration = this.defaultConfiguration()
      if (this.self.getConfig) {
        configuration = Object.assign(this.defaultConfiguration(), this.self.getConfig())
      }
      resolve(configuration)
    }).then(data => callback(data))
  }

  /**
   * @param {*String} symbolName  商品名称或ticker
   * @param {*Function} onSymbolResolvedCallback 成功回调
   * @param {*Function} onResolveErrorCallback   失败回调
   * `resolveSymbol` should return result asynchronously.
   */
  resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    return new Promise((resolve, reject) => {
      let symbolInfo = this.defaultSymbol()
      if (this.self.getSymbol) {
        symbolInfo = Object.assign(this.defaultSymbol(), this.self.getSymbol())
      }
      resolve(symbolInfo)
    }).then(data => onSymbolResolvedCallback(data)).catch(err => onResolveErrorCallback(err))
  }

  /**
   * @param {*Object} symbolInfo  商品信息对象
   * @param {*String} resolution  分辨率
   * @param {*Number} rangeStartDate  时间戳、最左边请求的K线时间
   * @param {*Number} rangeEndDate  时间戳、最右边请求的K线时间
   * @param {*Function} onDataCallback  回调函数
   * @param {*Function} onErrorCallback  回调函数
   */
  getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback) {

    axios.get('https://api.aofex.com/webApi/market/getKline?symbol=BTC-USDT&period=1min',{params:{size:200*this.self.page}}).then(res=>{
      let data =[]
      res.data.result.data.splice(-200).forEach(function(value){
        data.push({
          close: Number(value.close),
          open: Number(value.open),
          high: Number(value.high),
          low: Number(value.low),
          volume: Number(value.vol),
          time: Number(value.id*1000),
          // time: Number(res.result.ts),
        })

      })
      console.log(data);
      console.log(symbolInfo);
      data.reverse()
      if(this.self.cacheData[symbolInfo.ticker]){
        this.self.cacheData[symbolInfo.ticker] = [...data,...this.self.cacheData[symbolInfo.ticker]]
      }else {
        this.self.cacheData[symbolInfo.ticker] = data
      }

      console.log(this.self);
     // let data = [{time:1557974160000,open:8263.9,close:8263.92,low:8263.9,high:8263.92,vol:491.43821757},
     //    {time:1557973980000,open:8263.7,close:8263.7,low:8263.7,high:8263.7,vol:7.4621211}].reverse();
      data && data.length ? onDataCallback(data, { noData: true }) : onDataCallback([], { noData: true })
      this.self.page++
    })
    const onLoadedCallback = data => {
      data && data.length ? onDataCallback(data, { noData: true }) : onDataCallback([], { noData: true })
    }
    this.self.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback)
  }

  /**
   * 订阅K线数据。图表库将调用onRealtimeCallback方法以更新实时数据
   * @param {*Object} symbolInfo 商品信息
   * @param {*String} resolution 分辨率
   * @param {*Function} onRealtimeCallback 回调函数
   * @param {*String} subscriberUID 监听的唯一标识符
   * @param {*Function} onResetCacheNeededCallback (从1.7开始): 将在bars数据发生变化时执行
   */
  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    this.barsUpdater.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)
  }

  /**
   * 取消订阅K线数据
   * @param {*String} subscriberUID 监听的唯一标识符
   */
  unsubscribeBars(subscriberUID) {
    this.barsUpdater.unsubscribeBars(subscriberUID)
  }

  /**
   * 默认配置
   */
  defaultConfiguration() {
    return {
      supports_search: true,
      supports_group_request: false,
      supported_resolutions: ['1', '5', '15', '30', '60', '1D', '2D', '3D', '1W', '1M'],
      supports_marks: true,
      supports_timescale_marks: true,
      supports_time: true
    }
  }

  /**
   * 默认商品信息
   */
  defaultSymbol() {
    return {
      'name': 'BTCUSDT',
      'timezone': 'Asia/Shanghai',
      'minmov': 1,
      'minmov2': 0,
      'pointvalue': 1,
      'fractional': false,
      'session': '24x7',
      'has_intraday': true,
      'has_no_volume': false,
      'description': 'BTCUSDT',
      'pricescale': 1,
      'ticker': 'BTCUSDT',
      'supported_resolutions': ['1', '5', '15', '30', '60', '1D', '2D', '3D', '1W', '1M']
    }
  }
}

export default datafeeds
