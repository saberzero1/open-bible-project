(window.webpackJsonp=window.webpackJsonp||[]).push([[53,2],{308:function(t,e,r){"use strict";var n=r(3),l=r(309);n({target:"String",proto:!0,forced:r(310)("link")},{link:function(t){return l(this,"a","href",t)}})},309:function(t,e,r){var n=r(4),l=r(21),o=r(11),c=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var f=o(l(t)),k="<"+e;return""!==r&&(k+=" "+r+'="'+d(o(n),c,"&quot;")+'"'),k+">"+f+"</"+e+">"}},310:function(t,e,r){var n=r(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},311:function(t,e,r){"use strict";r.r(e);var n=r(9),l=(r(52),r(308),r(35),{name:"LangTable",props:{language:{type:String,required:!0}},data:function(){return{links:[],length:0}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.language).only("link").fetch();case 2:t.links=e.sent,t.links=t.links.link,t.length=Object.keys(t.links).length;case 5:case"end":return e.stop()}}),e)})))()}}),o=r(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overscroll-auto overflow-x-hidden absolute top-0 left-0 min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900"},[r("div",{staticClass:"inline-block min-w-full overflow-x-hidden align-middle border-b shadow sm:rounded-lg"},[t._m(0),t._v(" "),r("table",{staticClass:"min-w-full table-auto border-collapse border border-slate-500 bg-opacity-0"},[t._m(1),t._v(" "),r("tbody",t._l(t.links,(function(e,n){return r("tr",{key:n,staticClass:"border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"},[r("td",{staticClass:"px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-no-wrap"},[r("a",{staticClass:"font-medium text-blue-600 dark:text-blue-500 hover:underline",attrs:{href:e.url}},[t._v("\n              "+t._s(e.name)+"\n            ")])]),t._v(" "),r("td",{staticClass:"px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-no-wrap"},[t._v("\n            "+t._s(e.description)+"\n          ")])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"/"}},[r("button",{staticClass:"text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t._v("Back")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[r("tr",[r("th",{staticClass:"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase"},[t._v("\n            link\n          ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase"},[t._v("\n            description\n          ")])])])}],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);var n={name:"NorwegianPage"},l=r(51),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("lang-table",{attrs:{language:"norwegian"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LangTable:r(311).default})}}]);