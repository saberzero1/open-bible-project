(window.webpackJsonp=window.webpackJsonp||[]).push([[77,2],{306:function(n,t,e){"use strict";var r=e(3),l=e(307);r({target:"String",proto:!0,forced:e(308)("link")},{link:function(n){return l(this,"a","href",n)}})},307:function(n,t,e){var r=e(4),l=e(21),c=e(11),o=/"/g,f=r("".replace);n.exports=function(n,t,e,r){var v=c(l(n)),_="<"+t;return""!==e&&(_+=" "+e+'="'+f(c(r),o,"&quot;")+'"'),_+">"+v+"</"+t+">"}},308:function(n,t,e){var r=e(5);n.exports=function(n){return r((function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},309:function(n,t,e){"use strict";e.r(t);var r=e(9),l=(e(52),e(306),e(35),{name:"LangTable",props:{language:{type:String,required:!0}},data:function(){return{links:[],length:0}},fetch:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$content(n.language).only("link").fetch();case 2:n.links=t.sent,n.links=n.links.link,n.length=Object.keys(n.links).length;case 5:case"end":return t.stop()}}),t)})))()}}),c=e(51),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._m(0),n._v(" "),e("table",[n._m(1),n._v(" "),e("tbody",n._l(n.links,(function(t,r){return e("tr",{key:r},[e("td",[e("a",{attrs:{href:t.url}},[n._v(n._s(t.name))])]),n._v(" "),e("td",[n._v(n._s(t.description))])])})),0)])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{attrs:{href:"/"}},[e("button",[n._v("Back")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("thead",[e("tr",[e("th",[n._v("\n          link\n        ")]),n._v(" "),e("th",[n._v("\n          description\n        ")])])])}],!1,null,null,null);t.default=component.exports},397:function(n,t,e){"use strict";e.r(t);var r={name:"UcrainianPage"},l=e(51),component=Object(l.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("lang-table",{attrs:{language:"ucrainian"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LangTable:e(309).default})}}]);