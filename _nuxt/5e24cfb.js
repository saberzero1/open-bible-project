(window.webpackJsonp=window.webpackJsonp||[]).push([[62,2],{306:function(t,n,e){"use strict";var r=e(3),l=e(307);r({target:"String",proto:!0,forced:e(308)("link")},{link:function(t){return l(this,"a","href",t)}})},307:function(t,n,e){var r=e(4),l=e(21),c=e(11),o=/"/g,f=r("".replace);t.exports=function(t,n,e,r){var v=c(l(t)),_="<"+n;return""!==e&&(_+=" "+e+'="'+f(c(r),o,"&quot;")+'"'),_+">"+v+"</"+n+">"}},308:function(t,n,e){var r=e(5);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},309:function(t,n,e){"use strict";e.r(n);var r=e(9),l=(e(52),e(306),e(35),{name:"LangTable",props:{language:{type:String,required:!0}},data:function(){return{links:[],length:0}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content(t.language).only("link").fetch();case 2:t.links=n.sent,t.links=t.links.link,t.length=Object.keys(t.links).length;case 5:case"end":return n.stop()}}),n)})))()}}),c=e(51),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("table",[t._m(1),t._v(" "),e("tbody",t._l(t.links,(function(n,r){return e("tr",{key:r},[e("td",[e("a",{attrs:{href:n.url}},[t._v(t._s(n.name))])]),t._v(" "),e("td",[t._v(t._s(n.description))])])})),0)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"/"}},[e("button",[t._v("Back")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("\n          link\n        ")]),t._v(" "),e("th",[t._v("\n          description\n        ")])])])}],!1,null,null,null);n.default=component.exports},382:function(t,n,e){"use strict";e.r(n);var r={name:"SlovakPage"},l=e(51),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("lang-table",{attrs:{language:"slovak"}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{LangTable:e(309).default})}}]);