<template>
  <div id="trade-view" style="width: 100%;height: 500px;">
  </div>
</template>

<script>
import { widget as TvWidget } from '../../../static/tradeview/charting_library/charting_library.min.js'
import socket from './datafeeds/socket.js'
import datafeeds from './datafeeds/datafees.js'
export default {
  data() {
    return {
      widget: null,
      socket: new socket(),
      datafeeds: new datafeeds(this),
      symbol: null,
      interval: null,
      cacheData: {},
      lastTime: null,
      getBarTimer: null,
      isLoading: true,
      page:1
    }
  },
  created() {
    this.socket.doOpen()
    this.socket.on('open', () => {
      this.socket.send({ cmd: 'req', args: [`candle.M5.btcusdt}`, 1440, parseInt(Date.now() / 1000)] })
    })
    this.socket.on('message', this.onMessage)
  },
  methods: {
    init(symbol = 'BTCUSDT', interval = 5) {
      if (!this.widget) {
        this.widget = new TvWidget({
          symbol: symbol,
          interval: interval,
          // fullscreen: true,
          container_id: 'trade-view',
          datafeed: this.datafeeds,
          library_path: '/static/tradeview/charting_library/',
          disabled_features: ['header_symbol_search'],
          enabled_features: [],
          timezone: 'Asia/Shanghai',
          locale: 'zh',
          debug: false,
          drawings_access: {
            type: 'black',
            // tools: [{name: "Regression Trend"}]//todo: moje
            tools: [{name: "Trend Line", grayed: true}, {name: "Trend Angle", grayed: true}] //todo: bb
          },
          disabled_features: [
            "left_toolbar",
            "header_symbol_search",
            "header_interval_dialog_button",
            "show_interval_dialog_on_key_press",
            "symbol_search_hot_key",
            "study_dialog_search_control",
            "display_market_status",
            "header_compare",
            "edit_buttons_in_legend",
            "symbol_info",
            "border_around_the_chart",
            "main_series_scale_menu",
            "star_some_intervals_by_default",
            "datasource_copypaste",
            "right_bar_stays_on_scroll",
            "context_menus",
            "go_to_date",
            "compare_symbol",
            "border_around_the_chart",
            // "timezone_menu",
            "header_resolutions",//todo: przetestowac
            //"control_bar",//todo: przetestowac
            //"edit_buttons_in_legend",//todo: przetestowac
            "remove_library_container_border",
            "header_screenshot",
            "header_undo_redo",
            "save_chart_properties_to_local_storage",
            "volume_force_overlay",
            // "header_chart_type",
          ],
          enabled_features: [
            "timezone_menu",
            "header_settings",
            "dont_show_boolean_study_arguments",
            "use_localstorage_for_settings",
            "remove_library_container_border",
            // "save_chart_properties_to_local_storage",
            "side_toolbar_in_fullscreen_mode",
            "hide_last_na_study_output",
            "constraint_dialogs_movement",//todo: nie do końca jestem pewien
            // "header_resolutions",
          ],
          studies_overrides: {
            "volume.volume.color.0": "#ea5c5c",
            "volume.volume.color.1": "#72c356",
            "volume.volume.transparency": 75,
          },
          overrides: {
            "symbolWatermarkProperties.color": "rgba(0,0,0, 0)",
            "paneProperties.background": "#17192e",
            "paneProperties.vertGridProperties.color": "#344568",
            "paneProperties.horzGridProperties.color": "#344568",
            "paneProperties.crossHairProperties.color": "#58637a",
            "paneProperties.crossHairProperties.style": 2,
            "mainSeriesProperties.style": 1,//K线样式
            "mainSeriesProperties.showCountdown": false,
            "scalesProperties.showSeriesLastValue": true,
            "mainSeriesProperties.visible": false,
            "mainSeriesProperties.showPriceLine": false,
            "mainSeriesProperties.priceLineWidth": 1,
            "mainSeriesProperties.lockScale": false,
            "mainSeriesProperties.minTick": "default",
            "mainSeriesProperties.extendedHours": false,
            "volumePaneSize": "medium",
            editorFontsList: ["Lato", "Arial", "Verdana", "Courier New", "Times New Roman"],
            "paneProperties.topMargin": 5,
            "paneProperties.bottomMargin": 5,
            "paneProperties.leftAxisProperties.autoScale": true,
            "paneProperties.leftAxisProperties.autoScaleDisabled": false,
            "paneProperties.leftAxisProperties.percentage": false,
            "paneProperties.leftAxisProperties.percentageDisabled": false,
            "paneProperties.leftAxisProperties.log": false,
            "paneProperties.leftAxisProperties.logDisabled": false,
            "paneProperties.leftAxisProperties.alignLabels": true,
            "paneProperties.legendProperties.showStudyArguments": true,
            "paneProperties.legendProperties.showStudyTitles": true,
            "paneProperties.legendProperties.showStudyValues": true,
            "paneProperties.legendProperties.showSeriesTitle": true,
            "paneProperties.legendProperties.showSeriesOHLC": true,
            "scalesProperties.showLeftScale": false,
            "scalesProperties.showRightScale": true,
            "scalesProperties.backgroundColor": "#17192e",
            "scalesProperties.lineColor": "#46587b",
            "scalesProperties.textColor": "#8f98ad",
            "scalesProperties.scaleSeriesOnly": false,
            "mainSeriesProperties.priceAxisProperties.autoScale": true,
            "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": false,
            "mainSeriesProperties.priceAxisProperties.percentage": false,
            "mainSeriesProperties.priceAxisProperties.percentageDisabled": false,
            "mainSeriesProperties.priceAxisProperties.log": false,
            "mainSeriesProperties.priceAxisProperties.logDisabled": false,
            "mainSeriesProperties.candleStyle.upColor": "#72c356",
            "mainSeriesProperties.candleStyle.downColor": "#ea5c5c",
            "mainSeriesProperties.candleStyle.drawWick": true,
            "mainSeriesProperties.candleStyle.drawBorder": true,
            "mainSeriesProperties.candleStyle.borderColor": "#72c356",
            "mainSeriesProperties.candleStyle.borderUpColor": "#72c356",
            "mainSeriesProperties.candleStyle.borderDownColor": "#ea5c5c",
            "mainSeriesProperties.candleStyle.wickColor": "#737375",
            "mainSeriesProperties.candleStyle.wickUpColor": "#72c356",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ea5c5c",
            "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.hollowCandleStyle.upColor": "#72c356",
            "mainSeriesProperties.hollowCandleStyle.downColor": "#ea5c5c",
            "mainSeriesProperties.hollowCandleStyle.drawWick": true,
            "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
            "mainSeriesProperties.hollowCandleStyle.borderColor": "#72c356",
            "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#72c356",
            "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#ea5c5c",
            "mainSeriesProperties.hollowCandleStyle.wickColor": "#737375",
            "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#72c356",
            "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#ea5c5c",
            "mainSeriesProperties.haStyle.upColor": "#72c356",
            "mainSeriesProperties.haStyle.downColor": "#ea5c5c",
            "mainSeriesProperties.haStyle.drawWick": true,
            "mainSeriesProperties.haStyle.drawBorder": true,
            "mainSeriesProperties.haStyle.borderColor": "#72c356",
            "mainSeriesProperties.haStyle.borderUpColor": "#72c356",
            "mainSeriesProperties.haStyle.borderDownColor": "#ea5c5c",
            "mainSeriesProperties.haStyle.wickColor": "#737375",
            "mainSeriesProperties.haStyle.wickUpColor": "#72c356",
            "mainSeriesProperties.haStyle.wickDownColor": "#ea5c5c",
            "mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.upColor": "#72c356",
            "mainSeriesProperties.barStyle.downColor": "#ea5c5c",
            "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.dontDrawOpen": false,
            "mainSeriesProperties.lineStyle.color": "#0cbef3",
            "mainSeriesProperties.lineStyle.linestyle": 0,
            "mainSeriesProperties.lineStyle.linewidth": 1,
            "mainSeriesProperties.lineStyle.priceSource": "close",
            "mainSeriesProperties.areaStyle.color1": "#0cbef3",
            "mainSeriesProperties.areaStyle.color2": "#0098c4",
            "mainSeriesProperties.areaStyle.linecolor": "#0cbef3",
            "mainSeriesProperties.areaStyle.linestyle": 0,
            "mainSeriesProperties.areaStyle.linewidth": 1,
            "mainSeriesProperties.areaStyle.priceSource": "close",
            "mainSeriesProperties.areaStyle.transparency": 80,

          },
          custom_css_url: 'chart.css'
        });
        this.widget.onChartReady(function () {
          var that  = this
          var studies = [];
          createStudy()
          function createStudy() {
            var id = that.chart().createStudy('Moving Average', false, false, [5], null, { 'Plot.color': 'rgb(150, 95, 196)' });
            studies.push(id);
            id =  that.chart().createStudy('Moving Average', false, false, [10], null, { 'Plot.color': 'rgb(116,149,187)' });
            studies.push(id);
            id =  that.chart().createStudy('Moving Average', false, false, [20], null, { "plot.color": "rgb(58,113,74)" });
            studies.push(id);
            id = that.chart().createStudy('Moving Average Exponential', false, false, [26]);
            studies.push(id);
          }
        })
        this.symbol = symbol
        this.interval = interval
      }
    },
    sendMessage(data) {
      if (this.socket.checkOpen()) {
        this.socket.send(data)
      } else {
        this.socket.on('open', () => {
          this.socket.send(data)
        })
      }
    },
    unSubscribe(interval) {
      if (interval < 60) {
        this.sendMessage({ cmd: 'unsub', args: [`candle.M${interval}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
      } else if (interval >= 60) {
        this.sendMessage({ cmd: 'unsub', args: [`candle.H${interval / 60}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
      } else {
        this.sendMessage({ cmd: 'unsub', args: [`candle.D1.${this.symbol.toLowerCase()}`, 207, parseInt(Date.now() / 1000)] })
      }
    },
    subscribe() {
      if (this.interval < 60) {
        this.sendMessage({ cmd: 'sub', args: [`candle.M${this.interval}.${this.symbol.toLowerCase()}`] })
      } else if (this.interval >= 60) {
        this.sendMessage({ cmd: 'sub', args: [`candle.H${this.interval / 60}.${this.symbol.toLowerCase()}`] })
      } else {
        this.sendMessage({ cmd: 'sub', args: [`candle.D1.${this.symbol.toLowerCase()}`] })
      }
    },
    onMessage(data) {
      console.log(data)
      //websocket接收到的数据
      // alert(data)
      console.log(this.cacheData);
      const barsData = {
        close: Number(data.close),
        open: Number(data.open),
        high: Number(data.high),
        low: Number(data.low),
        volume: Number(data.vol),
        time: Number(data.id*1000),
      }
      // if (data.data && data.data.length) {
      //   const ticker = `${this.symbol}`
      //   this.subscribe()
      // this.datafeeds.barsUpdater.updateData()
      // }
      // if (data.type && data.type.indexOf(this.symbol.toLowerCase()) !== -1) {
      //   // console.log(' >> sub:', data.type)
      //   this.datafeeds.barsUpdater.updateData()
      //   const ticker = `${this.symbol}-${this.interval}`
      //   const barsData = {
      //     time: data.id * 1000,
      //     open: data.open,
      //     high: data.high,
      //     low: data.low,
      //     close: data.close,
      //     volume: data.quote_vol
      //   }
      //   if (barsData.time >= this.lastTime && this.cacheData[ticker] && this.cacheData[ticker].length) {
      //     this.cacheData[ticker][this.cacheData[ticker].length - 1] = barsData
      //   }
      // }
    },
    getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback) {
      // console.log(' >> :', rangeStartDate, rangeEndDate)
      if (this.interval !== resolution) {
        this.unSubscribe(this.interval)
        this.interval = resolution
        if (resolution < 60) {
          this.sendMessage({ cmd: 'req', args: [`candle.M${this.interval}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
        } else if (resolution >= 60) {
          this.sendMessage({ cmd: 'req', args: [`candle.H${this.interval / 60}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
        } else {
          this.sendMessage({ cmd: 'req', args: [`candle.D1.${this.symbol.toLowerCase()}`, 800, parseInt(Date.now() / 1000)] })
        }
      }
      const ticker = `${this.symbol}-${this.interval}`
      if (this.cacheData[ticker] && this.cacheData[ticker].length) {
        this.isLoading = false
        const newBars = []
        this.cacheData[ticker].forEach(item => {
          if (item.time >= rangeStartDate * 1000 && item.time <= rangeEndDate * 1000) {
            newBars.push(item)
          }
        })
        onLoadedCallback(newBars)
      } else {
        const self = this
        this.getBarTimer = setTimeout(function () {
          self.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback)
        }, 10)
      }
    }
  }
}
</script>

<style>

  #trade-view iframe{
    width: 100%;
  }
</style>

