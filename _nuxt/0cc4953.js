(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{482:function(e,t,n){"use strict";n.r(t);n(31),n(441),n(56),n(58),n(39),n(60),n(61);var r=n(24),c=n(10),l=n(30),o=(n(81),n(15),n(447),n(41),n(454),n(455),n(456),n(459),n(460),n(461),n(462),n(464),n(466),n(468),n(470),n(471),n(472),n(473),n(474),n(476),n(42),n(75),n(99),n(28),n(82),n(0));function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){o=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw c}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d="1.0.0",k={trade:{TradingView:"TradingView",BinanceSwap:"Binance Swap",BinanceSpot:"Binance Spot"},data:{CoinGeckoMarket:"CoinGecko Market"},info:{BinanceProject:"Binance Project",Wikibit:"区块天眼"}},v=o.default.extend({name:"one-click",data:function(){var e;return{isTemp:!1,name:"lovekc",TARGETS:k,kw:"",panels:{trade:{name:"trade",alias:"交易",checkAll:!1,checkedTargets:[],targets:Object.values(k.trade)},data:{name:"data",alias:"数据",checkAll:!1,checkedTargets:[],targets:Object.values(k.data)},info:{name:"info",alias:"资讯",checkAll:!1,checkedTargets:[],targets:Object.values(k.info)},__version__:{name:"__version__",alias:d,checkAll:!1,checkedTargets:[],targets:[]}},targetUrls:(e={},Object(l.a)(e,k.trade.BinanceSwap,[null,"https://www.binance.com/zh-CN/futures/%sUSDT"]),Object(l.a)(e,k.trade.BinanceSpot,[null,"https://www.binance.com/zh-CN/trade/%s_USDT"]),Object(l.a)(e,k.trade.TradingView,[null,"https://tradingview.com/chart/gnhnEDWm/?symbol=BINANCE%3A%sUSDT"]),Object(l.a)(e,k.data.CoinGeckoMarket,["coingecko","https://www.coingecko.com/zh/%E6%95%B0%E5%AD%97%E8%B4%A7%E5%B8%81/%s#markets"]),Object(l.a)(e,k.info.TokenInsight,[null,"https://tokeninsight.com/zh/coins/%s/overview"]),Object(l.a)(e,k.info.BinanceProject,["binance_project","https://research.binance.com/cn/projects/%s"]),Object(l.a)(e,k.info.Wikibit,[null,"https://wikibit.com/zh-cn/search.html?keyword=%s"]),e)}},watch:{panels:{handler:function(e){this.isTemp||localStorage.setItem("panels",JSON.stringify(e))},deep:!0}},mounted:function(){var e=localStorage.getItem("panels");e&&e.__version__&&e.__version__.alias===d&&(this.panels=JSON.parse(e))},methods:{myMethod:function(){},onClick:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,l,o,h,d,k,v,m,y,w,_,x,S,T;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.kw){t.next=2;break}return t.abrupt("return");case 2:for(c in n=new Set,e.panels){l=e.panels[c],o=f(l.checkedTargets);try{for(o.s();!(h=o.n()).done;)d=h.value,n.add(d)}catch(e){o.e(e)}finally{o.f()}}k=f(n),t.prev=5,k.s();case 7:if((v=k.n()).done){t.next=25;break}return m=v.value,t.next=11,new Promise((function(e){return setTimeout(e,200)}));case 11:if(y=Object(r.a)(e.targetUrls[m],2),w=y[0],_=y[1],x=e.kw.toUpperCase(),!w){t.next=21;break}if(S=window["one_click_".concat(w)]){t.next=17;break}return t.abrupt("continue",23);case 17:if(x=S[e.kw.toUpperCase()]){t.next=21;break}return e.$message({message:"未找到 ".concat(e.kw," 的 ").concat(m," 信息"),type:"warning",duration:5e3}),t.abrupt("continue",23);case 21:T="".concat(_.replace("%s",x)),window.open(T,T);case 23:t.next=7;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(5),k.e(t.t0);case 30:return t.prev=30,k.f(),t.finish(30);case 33:case"end":return t.stop()}}),t,null,[[5,27,30,33]])})))()},handleCheckAllChange:function(e,t){var n=this.panels[t].targets;this.panels[t].checkedTargets=e?n:[]},handleCheckedCitiesChange:function(e,t){var n=e.length,r=this.panels[t].targets;this.panels[t].checkAll=n===r.length}}}),m=n(55),component=Object(m.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-container",[t("el-header",[t("el-row",{staticClass:"row-bg",staticStyle:{display:"none"},attrs:{type:"flex",justify:"end"}},[t("el-col",{attrs:{span:2}},[t("span",[e._v("如何用？")])]),e._v(" "),t("el-col",{attrs:{span:2}},[t("div",[e._v("帮助")])]),e._v(" "),t("el-col",{attrs:{span:2}},[t("div",{staticClass:"grid-content bg-purple-light"},[e._v("意见")])]),e._v(" "),t("el-col",{attrs:{span:2}},[t("div",{staticClass:"grid-content bg-purple"},[e._v("登录")])])],1)],1),e._v(" "),t("el-main",[t("el-row",[t("el-row",{staticStyle:{"margin-bottom":"50px"},attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("div",{staticStyle:{"font-size":"20px","text-align":"center"}},[e._v("\n            输入币名或关键词，一键打开多个网站\n          ")])])],1),e._v(" "),t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("el-input",{attrs:{placeholder:"如 BTC、Filecoin"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onClick.apply(null,arguments)}},model:{value:e.kw,callback:function(t){e.kw=t},expression:"kw"}},[t("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-s-grid"},on:{click:e.onClick,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onClick.apply(null,arguments)}},slot:"append"})],1)],1)],1),e._v(" "),t("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:11}},[t("el-checkbox",{model:{value:e.isTemp,callback:function(t){e.isTemp=t},expression:"isTemp"}},[e._v("临时(不保存设置)")])],1)],1),e._v(" "),t("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:11}},e._l(e.panels,(function(n){return t("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:24}},["__version__"!=n.name?t("el-card",{attrs:{shadow:"never"}},[t("el-checkbox",{attrs:{indeterminate:n.checkedTargets.length>0&&n.checkedTargets.length<n.targets.length},on:{change:function(t){return e.handleCheckAllChange(t,n.name)}},model:{value:n.checkAll,callback:function(t){e.$set(n,"checkAll",t)},expression:"panel.checkAll"}},[e._v(e._s(n.alias))]),e._v(" "),t("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),t("el-checkbox-group",{on:{change:function(t){return e.handleCheckedCitiesChange(t,n.name)}},model:{value:n.checkedTargets,callback:function(t){e.$set(n,"checkedTargets",t)},expression:"panel.checkedTargets"}},e._l(Object.values(e.TARGETS[n.name]),(function(n){return t("el-checkbox",{key:n,attrs:{label:n}},[e._v(e._s(n))])})),1)],1):e._e()],1)})),1)],1)],1)],1),e._v(" "),t("el-footer",[t("el-row",{staticStyle:{"margin-bottom":"5px"},attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("span",{staticStyle:{"font-size":"14px","text-align":"left"}},[e._v("若浏览器弹窗受限，请在地址栏打开")])])],1)],1)],1)}),[],!1,null,"241dcf61",null);t.default=component.exports}}]);