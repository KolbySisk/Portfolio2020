(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=a(n("q1tI")),o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=u,t.useAmp=function(){return u(i.default.useContext(o.AmpStateContext))}},"/a9y":function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),i=n("ZDA2"),o=n("/+P4"),u=n("N9n2"),l=n("KI45");t.__esModule=!0,t.default=void 0;var c=l(n("q1tI")),d=l(n("8Kt/")),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},f=function(e){function t(){return r(this,t),i(this,o(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||s[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:p.error},c.default.createElement(d.default,null,c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:p.h1},e):null,c.default.createElement("div",{style:p.desc},c.default.createElement("h2",{style:p.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(c.default.Component);t.default=f,f.displayName="ErrorPage";var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),a=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var o=i(n("q1tI")),u=i(n("Xuae")),l=n("lwAK"),c=n("FYa8"),d=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,a={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var d=p[l];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var s=i.props[d],f=a[d]||new r;f.has(s)?o=!1:(f.add(s),a[d]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var v=u.default();function m(e){var t=e.children;return o.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:d.isInAmpMode(e)},t)}))}))}m.rewind=v.rewind,t.default=m},FYa8:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=a(n("q1tI"));t.HeadManagerContext=i.createContext(null)},PQJW:function(e,t,n){var r=n("d04V"),a=n("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),a=n("PQJW"),i=n("2PDY");e.exports=function(e){return r(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),i=n("/+P4"),o=n("K47E"),u=n("WaGi"),l=n("N9n2"),c=n("TbGu"),d=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var s=n("q1tI"),f=!1;t.default=function(){var e,t=new d;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function d(e){var u;return r(this,d),u=a(this,i(d).call(this,e)),f&&(t.add(o(u)),n(o(u))),u}return l(d,c),u(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(s.Component)}},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=a(n("q1tI"));t.AmpStateContext=i.createContext({})}},[["04ac",0,1]]]);