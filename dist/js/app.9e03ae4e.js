(function(t){function e(e){for(var s,l,o=e[0],a=e[1],c=e[2],d=0,p=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var s={},r={app:0},i=[];function l(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=s,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(n,s,function(e){return t[e]}.bind(null,s));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1119:function(t,e,n){},3911:function(t,e,n){},"3c00":function(t,e){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},"476f":function(t,e,n){},"4aed":function(t,e,n){"use strict";n("f011")},"513d":function(t,e,n){"use strict";n("476f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),n("tab"),n("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),n("h1",{staticClass:"text"},[t._v("123音乐")])])}],a={name:"m-header.vue"},c=a,u=(n("9ff3"),n("2877")),d=Object(u["a"])(c,l,o,!1,null,"5e5358e6",null),p=d.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行")])]),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜素")])])],1)},h=[],f={name:"tab.vue"},m=f,v=(n("c4ab"),Object(u["a"])(m,A,h,!1,null,"3fe5feae",null)),b=v.exports,g={name:"App",components:{"m-header":p,tab:b}},y=g,w=(n("e952"),Object(u["a"])(y,r,i,!1,null,"1cd7ff12",null)),C=w.exports,O=(n("f867"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" rank组件提示 ")])},k=[],I={name:"rank.vue"},R=I,D=Object(u["a"])(R,j,k,!1,null,"c2d2623e",null),E=D.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 搜素组件 ")])},S=[],z={name:"search.vue"},Z=z,B=Object(u["a"])(Z,M,S,!1,null,"2c898537",null),G=B.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 歌手组件 ")])},J=[],L={name:"singer.vue"},q=L,x=Object(u["a"])(q,T,J,!1,null,"c7a73d70",null),W=x.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"list",staticClass:"recommend-content",attrs:{data:t.disclist}},[n("div",[n("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[n("slider",t._l(t.sliderRecommends,(function(e){return n("div",{key:e.id,on:{click:function(n){return t.selectItem(e)}}},[n("a",[n("img",{attrs:{src:e.cover,alt:""}})])])})),0)],1),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),n("ul",t._l(t.disclist,(function(e){return n("li",{key:e.id,staticClass:"item",on:{click:function(n){return t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{attrs:{width:"60",height:"60",src:e.cover}})]),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.category)}}),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.title)}})])])})),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.disclist.length,expression:"!disclist.length"}],staticClass:"loading-container"},[n("loading")],1)]),n("router-view")],1)},Q=[],P=(n("159b"),n("bc3a")),Y=n.n(P),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),n("div",{staticClass:"dots"},t._l(t.dots,(function(e,s){return n("span",{key:e,staticClass:"dot",class:{active:t.currentPageIndex===s},attrs:{index:s}})})),0)])},U=[];n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),n("a15b");function V(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)");return n.test(t.className)}function F(t,e){if(!V(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}var K=document.createElement("div").style;(function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==K[t[e]])return e})();var _=n("1fba"),X={name:"slider",props:{loop:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout((function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()}),17),window.addEventListener("resize",(function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())}))},destroyed:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children,console.log(this.children.length);for(var e=0,n=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){var r=this.children[s];F(r,"slider-item"),r.style.width=n+"px",e+=n}this.loop&&!t&&(e+=2*n),this.$refs.sliderGroup.style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new _["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",(function(){var e=t.slider.getCurrentPage().pageX;console.log(e),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._play())}))},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+1;this.timer=setTimeout((function(){t.slider.goToPage(e,0,400)}),this.interval)}}},$=X,tt=(n("4aed"),Object(u["a"])($,H,U,!1,null,"521c9c71",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper"},[t._t("default")],2)},st=[],rt={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!0},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!0},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout((function(){t._initScroll()}),20)},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new _["a"](this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollY:this.scrollY}),this.listenScroll&&this.scroll.on("scroll",(function(e){t.$emit("scroll",e)})),this.pullup&&this.scroll.on("scrollEnd",(function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")})),this.pulldown&&this.scroll.on("touchend",(function(e){e.y>50&&t.$emit("pulldown")})),this.beforeScroll&&this.scroll.on("beforeScrollStart",(function(){t.$emit("beforeScroll")})))},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrillTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout((function(){t.refresh()}),this.refreshDelay)}}},it=rt,lt=Object(u["a"])(it,nt,st,!1,null,"034bb03c",null),ot=lt.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("img",{attrs:{"width:":"24",height:"24",src:n("3c00")}}),s("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},ct=[],ut={props:{title:{type:String,default:"正在载入..."}}},dt=ut,pt=(n("513d"),Object(u["a"])(dt,at,ct,!1,null,"09630960",null)),At=pt.exports,ht={data:function(){return{sliderRecommends:[],disclist:[]}},beforeCreate:function(){var t=this;Y.a.get("http://localhost:1110/api/getRecommendData").then((function(e){t.sliderRecommends=e.data.shift().categoryList,console.log(t.sliderRecommends),e.data.forEach((function(e){e.categoryList.forEach((function(n){n.category=e.category,t.disclist.push(n)}))}))}))},methods:{handlePlaylist:function(t){this.$refs.recommend.style.bottom=t.length>0?"50px":"",this.$refs.list.refresh()},selectItem:function(t){var e=this;Y.a.get("http://localhost:110/api/getRecommendDetailData/".concat(t.id)).then((function(n){console.log(n.data[0]),e.$router.push("/recommend/".concat(t.id)),e.setDisc(n.data[0])}))}},components:{Slider:et,Scroll:ot,Loading:At}},ft=ht,mt=(n("f800"),Object(u["a"])(ft,N,Q,!1,null,"4945175a",null)),vt=mt.exports;s["a"].use(O["a"]);var bt=new O["a"]({routes:[{path:"/",redirect:"/recommend"},{path:"/rank",component:E},{path:"/search",component:G},{path:"/singer",component:W},{path:"/recommend",component:vt}]}),gt=n("fe3c"),yt=n.n(gt);yt.a.attach(document.body),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(C)},router:bt}).$mount("#app")},"9ff3":function(t,e,n){"use strict";n("1119")},a2a2:function(t,e,n){},c4ab:function(t,e,n){"use strict";n("f767")},e952:function(t,e,n){"use strict";n("3911")},f011:function(t,e,n){},f767:function(t,e,n){},f800:function(t,e,n){"use strict";n("a2a2")},f867:function(t,e,n){}});
//# sourceMappingURL=app.9e03ae4e.js.map