webpackJsonp([1],{IuFh:function(e,t,n){(function(e){"use strict";function t(e,n){var s=i({},e);for(var o in n)"object"!=typeof e[o]||null===e[o]||Array.isArray(e[o])?void 0!==n[o]&&(s[o]=n[o]):s[o]=t(e[o],n[o]);return s}function n(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}var i=Object.assign||function(e){for(var t,n=arguments,i=1,s=arguments.length;i<s;i++)for(var o in t=n[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},o={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},r=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=t(o,e),e.preset){var n=s[e.preset];n?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(n.disabled_features):this._options.disabled_features=n.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(n.enabled_features):this._options.enabled_features=n.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.setLanguage=function(e){this.remove(),this._options.locale=e,this._create()},e.prototype.setSymbol=function(e,t,n){this._innerAPI().changeSymbol(e,t+"",n)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var e=this._getIFrameElement();e.contentWindow.destroyChart(),e.parentNode&&e.parentNode.removeChild(e)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,n,i){this._innerAPI().saveChartToServer(e,t,n,i)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=t(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype._getIFrameElement=function(){var e=document.getElementById(this._id);if(null===e)throw new Error("There is no such iframe");return e},e.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},e.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),n=document.getElementById(this._options.container_id);if(null===n)throw new Error("There is no such element - #"+this._options.container_id);n.innerHTML=t;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var s=function(){i.removeEventListener("load",s,!1),i.contentWindow.widgetReady(function(){e._ready=!0;for(var t=0,n=e._readyHandlers;t<n.length;t++)n[t].call(e);i.contentWindow.initializationFinished()})};i.addEventListener("load",s,!1)},e.prototype._render=function(){var e=window;e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(e[this._id].chartContent={json:this._options.saved_data});var t=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=n,e.version=n,e.onready=function(e){window.addEventListener("DOMContentLoaded",e,!1)},e.widget=r,Object.defineProperty(e,"__esModule",{value:!0})})(t)},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s=n("IuFh"),o=n("//Fk"),r=n.n(o),a=n("mvHQ"),h=n.n(a),u=n("Zrlr"),c=n.n(u),l=n("wxAW"),d=n.n(l),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wss://api.fcoin.com/v2/ws",n=arguments[1];c()(this,e),this.heartBeatTimer=null,this.options=n,this.messageMap={},this.connState=0,this.socket=null,this.url=t}return d()(e,[{key:"doOpen",value:function(){var e=this;if(!this.connState){this.connState=1,this.afterOpenEmit=[];var t=new(window.WebSocket||window.MozWebSocket)(this.url);t.binaryType="arraybuffer",t.onopen=function(t){return e.onOpen(t)},t.onclose=function(t){return e.onClose(t)},t.onmessage=function(t){return e.onMessage(t.data)},t.onerror=function(t){return e.onError(t)},this.socket=t}}},{key:"onOpen",value:function(e){this.connState=2,this.heartBeatTimer=setInterval(this.checkHeartbeat.bind(this),2e4),this.onReceiver({Event:"open"})}},{key:"checkOpen",value:function(){return 2===this.connState}},{key:"onClose",value:function(){this.connState=0,this.connState&&this.onReceiver({Event:"close"})}},{key:"send",value:function(e){this.socket.send(h()(e))}},{key:"emit",value:function(e){var t=this;return new r.a(function(n){t.socket.send(h()(e)),t.on("message",function(e){n(e)})})}},{key:"onMessage",value:function(e){try{var t=JSON.parse(e);this.onReceiver({Event:"message",Data:t})}catch(e){console.error(" >> Data parsing error:",e)}}},{key:"checkHeartbeat",value:function(){var e={cmd:"ping",args:[Date.parse(new Date)]};this.send(e)}},{key:"onError",value:function(e){}},{key:"onReceiver",value:function(e){var t=this.messageMap[e.Event];t&&t(e.Data)}},{key:"on",value:function(e,t){this.messageMap[e]=t}},{key:"doClose",value:function(){this.socket.close()}},{key:"destroy",value:function(){this.heartBeatTimer&&(clearInterval(this,this.heartBeatTimer),this.heartBeatTimer=null),this.doClose(),this.messageMap={},this.connState=0,this.socket=null}}]),e}(),_=n("woOf"),f=n.n(_),m=function(){function e(t){c()(this,e),this.subscribers={},this.requestsPending=0,this.historyProvider=t}return d()(e,[{key:"subscribeBars",value:function(e,t,n,i){this.subscribers[i]={lastBarTime:null,listener:n,resolution:t,symbolInfo:e}}},{key:"unsubscribeBars",value:function(e){delete this.subscribers[e]}},{key:"updateData",value:function(){var e=this;if(!this.requestsPending)for(var t in this.requestsPending=0,this.subscribers)this.requestsPending++,this.updateDataForSubscriber(t).then(function(){return e.requestsPending--}).catch(function(){return e.requestsPending--})}},{key:"updateDataForSubscriber",value:function(e){var t=this;return new r.a(function(n,i){var s=t.subscribers[e],o=parseInt((Date.now()/1e3).toString()),r=o-t.periodLengthSeconds(s.resolution,10);t.historyProvider.getBars(s.symbolInfo,s.resolution,r,o,function(i){t.onSubscriberDataReceived(e,i),n()},function(){i()})})}},{key:"onSubscriberDataReceived",value:function(e,t){if(this.subscribers.hasOwnProperty(e)&&t.length){var n=t[t.length-1],i=this.subscribers[e];if(!(null!==i.lastBarTime&&n.time<i.lastBarTime)){if(null!==i.lastBarTime&&n.time>i.lastBarTime){if(t.length<2)throw new Error("Not enough bars in history for proper pulse update. Need at least 2.");var s=t[t.length-2];i.listener(s)}i.lastBarTime=n.time,i.listener(n)}}}},{key:"periodLengthSeconds",value:function(e,t){return 24*("D"===e||"1D"===e?t:"M"===e||"1M"===e?31*t:"W"===e||"1W"===e?7*t:t*parseInt(e)/1440)*60*60}}]),e}(),v=function(){function e(t){c()(this,e),this.self=t,this.barsUpdater=new m(this)}return d()(e,[{key:"onReady",value:function(e){var t=this;return new r.a(function(e,n){var i=t.defaultConfiguration();t.self.getConfig&&(i=f()(t.defaultConfiguration(),t.self.getConfig())),e(i)}).then(function(t){return e(t)})}},{key:"resolveSymbol",value:function(e,t,n){var i=this;return new r.a(function(e,t){var n=i.defaultSymbol();i.self.getSymbol&&(n=f()(i.defaultSymbol(),i.self.getSymbol())),e(n)}).then(function(e){return t(e)}).catch(function(e){return n(e)})}},{key:"getBars",value:function(e,t,n,i,s,o){this.self.getBars(e,t,n,i,function(e){e&&e.length?s(e,{noData:!0}):s([],{noData:!0})})}},{key:"subscribeBars",value:function(e,t,n,i,s){this.barsUpdater.subscribeBars(e,t,n,i,s)}},{key:"unsubscribeBars",value:function(e){this.barsUpdater.unsubscribeBars(e)}},{key:"defaultConfiguration",value:function(){return{supports_search:!0,supports_group_request:!1,supported_resolutions:["1","5","15","30","60","1D","2D","3D","1W","1M"],supports_marks:!0,supports_timescale_marks:!0,supports_time:!0}}},{key:"defaultSymbol",value:function(){return{name:"BTCUSDT",timezone:"Asia/Shanghai",minmov:1,minmov2:0,pointvalue:1,fractional:!1,session:"24x7",has_intraday:!0,has_no_volume:!1,description:"BTCUSDT",pricescale:1,ticker:"BTCUSDT",supported_resolutions:["1","5","15","30","60","1D","2D","3D","1W","1M"]}}}]),e}(),g={data:function(){return{widget:null,socket:new p,datafeeds:new v(this),symbol:null,interval:null,cacheData:{},lastTime:null,getBarTimer:null,isLoading:!0}},created:function(){var e=this;this.socket.doOpen(),this.socket.on("open",function(){e.socket.send({cmd:"req",args:["candle.M5.btcusdt}",1440,parseInt(Date.now()/1e3)]})}),this.socket.on("message",this.onMessage)},methods:{init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BTCUSDT",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;this.widget||(this.widget=new s.widget({symbol:e,interval:t,container_id:"trade-view",datafeed:this.datafeeds,library_path:"/static/tradeview/charting_library/",disabled_features:["header_symbol_search"],enabled_features:[],timezone:"Asia/Shanghai",locale:"zh",debug:!1}),this.symbol=e,this.interval=t)},sendMessage:function(e){var t=this;this.socket.checkOpen()?this.socket.send(e):this.socket.on("open",function(){t.socket.send(e)})},unSubscribe:function(e){e<60?this.sendMessage({cmd:"unsub",args:["candle.M"+e+"."+this.symbol.toLowerCase(),1440,parseInt(Date.now()/1e3)]}):e>=60?this.sendMessage({cmd:"unsub",args:["candle.H"+e/60+"."+this.symbol.toLowerCase(),1440,parseInt(Date.now()/1e3)]}):this.sendMessage({cmd:"unsub",args:["candle.D1."+this.symbol.toLowerCase(),207,parseInt(Date.now()/1e3)]})},subscribe:function(){this.interval<60?this.sendMessage({cmd:"sub",args:["candle.M"+this.interval+"."+this.symbol.toLowerCase()]}):this.interval>=60?this.sendMessage({cmd:"sub",args:["candle.H"+this.interval/60+"."+this.symbol.toLowerCase()]}):this.sendMessage({cmd:"sub",args:["candle.D1."+this.symbol.toLowerCase()]})},onMessage:function(e){if(e.data&&e.data.length){var t=[],n=this.symbol+"-"+this.interval;e.data.forEach(function(e){t.push({time:"D"!==this.interval||"1D"!==this.interval?1e3*e.id:e.id,open:e.open,high:e.high,low:e.low,close:e.close,volume:e.quote_vol})},this),this.cacheData[n]=t,this.lastTime=t[t.length-1].time,this.subscribe()}if(e.type&&-1!==e.type.indexOf(this.symbol.toLowerCase())){this.datafeeds.barsUpdater.updateData();var i=this.symbol+"-"+this.interval,s={time:1e3*e.id,open:e.open,high:e.high,low:e.low,close:e.close,volume:e.quote_vol};s.time>=this.lastTime&&this.cacheData[i]&&this.cacheData[i].length&&(this.cacheData[i][this.cacheData[i].length-1]=s)}},getBars:function(e,t,n,i,s){this.interval!==t&&(this.unSubscribe(this.interval),this.interval=t,t<60?this.sendMessage({cmd:"req",args:["candle.M"+this.interval+"."+this.symbol.toLowerCase(),1440,parseInt(Date.now()/1e3)]}):t>=60?this.sendMessage({cmd:"req",args:["candle.H"+this.interval/60+"."+this.symbol.toLowerCase(),1440,parseInt(Date.now()/1e3)]}):this.sendMessage({cmd:"req",args:["candle.D1."+this.symbol.toLowerCase(),800,parseInt(Date.now()/1e3)]}));var o=this.symbol+"-"+this.interval;if(this.cacheData[o]&&this.cacheData[o].length){this.isLoading=!1;var r=[];this.cacheData[o].forEach(function(e){e.time>=1e3*n&&e.time<=1e3*i&&r.push(e)}),s(r)}else{var a=this;this.getBarTimer=setTimeout(function(){a.getBars(e,t,n,i,s)},10)}}}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"trade-view"}})},staticRenderFns:[]},b={name:"App",components:{TradeView:n("VU/8")(g,y,!1,null,null,null).exports},mounted:function(){this.$refs.trade.init("BTCUSDT",5)}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("trade-view",{ref:"trade"})],1)},staticRenderFns:[]},C=n("VU/8")(b,w,!1,null,null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:C},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.8df69dc327e3d105fcdc.js.map