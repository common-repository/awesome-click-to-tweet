this["tld-block"]=this["tld-block"]||{},this["tld-block"].main=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){!function(){t.exports=this.wp.editor}()},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(8),o=n(9);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===o)for(var l in r)i.call(r,l)&&r[l]&&t.push(l)}}return t.join(" ")}var i={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=n:(r=[],void 0!==(o=function(){return n}.apply(e,r))&&(t.exports=o))}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(14)),i=(n.n(o),n(15)),l=n(16),c=n(51);e.default=Object(o.registerBlockType)("thelonedev/clicktotweet",{title:Object(r.__)("Click to Tweet"),category:"widgets",icon:"twitter",keywords:[Object(r.__)("Twitter"),Object(r.__)("Tweet")],attributes:i.a,edit:l.a,save:c.a})},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,n){"use strict";var r=n(0),o=(n.n(r),{tweetmask:{type:"string"},tweet:{type:"string"},button:{type:"string",default:Object(r.__)("Tweet Now")},theme:{type:"string",default:"bbutton"},font:{type:"string",default:"poiret-one"},animation:{type:"string",default:"none"},infinite:{type:"boolean",default:!1},duration:{type:"number",default:1},delay:{type:"number",default:1}});e.a=o},function(t,e,n){"use strict";var r=n(17),o=n.n(r),i=n(11),l=n.n(i),c=n(0),a=(n.n(c),n(46)),u=(n.n(a),n(5)),f=(n.n(u),n(47)),s=n(48),p=n(50),m=(n.n(p),function(t){var e=t.attributes,n=t.setAttributes,r=t.className,i=e.animation,p=e.theme,m=e.font,d=e.infinite,w=e.duration,h=e.delay,b=e.tweet,y=e.tweetmask,v=e.button,g=function(t){n({tweetmask:t})};return wp.element.createElement(a.Fragment,null,wp.element.createElement(f.a,o()({},t)),wp.element.createElement(s.a,o()({},t)),wp.element.createElement("div",{className:r},wp.element.createElement("div",{id:"tld-actt-tweet-container",className:l()("tld-actt-"+p,m,i,{animated:"none"!==i},{infinite:!!d}),style:{"animation-duration":w+"s","animation-delay":h+"s"}},wp.element.createElement(u.RichText,{format:"string",tagName:"p",placeholder:Object(c.__)("Your Tweet"),onChange:g,value:y,formattingControls:[]}),wp.element.createElement("div",{className:l()("tld-actt-tweet-text",{"tld-actt-white-btn-text":"bbutton"===p},{"tld-actt-btn-full":"bbutton"===p})},wp.element.createElement("a",{className:"bbutton"!==p?"tld-actt-btn-default":"",target:"_blank",href:"https://twitter.com/intent/tweet?text="+(void 0!==b?b:y)},wp.element.createElement("span",null,v),wp.element.createElement("span",{className:"icon-twitter"}))))))});e.a=m},function(t,e,n){"use strict";e.__esModule=!0;var r=n(18),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(19),__esModule:!0}},function(t,e,n){n(20),t.exports=n(6).Object.assign},function(t,e,n){var r=n(21);r(r.S+r.F,"Object",{assign:n(31)})},function(t,e,n){var r=n(1),o=n(6),i=n(22),l=n(24),c=function(t,e,n){var a,u,f,s=t&c.F,p=t&c.G,m=t&c.S,d=t&c.P,w=t&c.B,h=t&c.W,b=p?o:o[e]||(o[e]={}),y=b.prototype,v=p?r:m?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(u=!s&&v&&void 0!==v[a])&&a in b||(f=u?v[a]:n[a],b[a]=p&&"function"!=typeof v[a]?n[a]:w&&u?i(f,r):h&&v[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?i(Function.call,f):f,d&&((b.virtual||(b.virtual={}))[a]=f,t&c.R&&y&&!y[a]&&l(y,a,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(23);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(25),o=n(30);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(26),o=n(27),i=n(29),l=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(2),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(32),o=n(43),i=n(44),l=n(45),c=n(8),a=Object.assign;t.exports=!a||n(4)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=l(t),a=arguments.length,u=1,f=o.f,s=i.f;a>u;)for(var p,m=c(arguments[u++]),d=f?r(m).concat(f(m)):r(m),w=d.length,h=0;w>h;)s.call(m,p=d[h++])&&(n[p]=m[p]);return n}:a},function(t,e,n){var r=n(33),o=n(42);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(34),o=n(7),i=n(36)(!1),l=n(39)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,u=[];for(n in c)n!=l&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7),o=n(37),i=n(38);t.exports=function(t){return function(e,n,l){var c,a=r(e),u=o(a.length),f=i(l,u);if(t&&n!=n){for(;u>f;)if((c=a[f++])!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(40)("keys"),o=n(41);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e){!function(){t.exports=this.wp.element}()},function(t,e,n){"use strict";var r=n(0),o=(n.n(r),n(5)),i=(n.n(o),n(12)),l=(n.n(i),function(t){var e=t.attributes,n=t.setAttributes,l=e.tweet,c=e.button,a=e.animation,u=e.infinite,f=e.duration,s=e.delay,p=function(t){n({tweet:t})},m=function(t){n({button:t})},d=function(t){n({animation:t})},w=function(){n({infinite:!u})},h=function(t){n({duration:t})},b=function(t){n({delay:t})};return wp.element.createElement(o.InspectorControls,{key:"inspector"},wp.element.createElement(i.PanelBody,{title:Object(r.__)("Tweet Settings")},wp.element.createElement(i.TextareaControl,{label:Object(r.__)("Tweet Text"),value:l,onChange:p,help:Object(r.__)("You can add hashtags and mentions here that will be part of the actual tweet, but not of the display on your post.")}),wp.element.createElement(i.TextControl,{label:Object(r.__)("Button Text"),value:c,onChange:m})),wp.element.createElement(i.PanelBody,{title:Object(r.__)("Animation Settings")},wp.element.createElement(i.SelectControl,{label:Object(r.__)("Animation"),value:a,options:[{label:Object(r.__)("None"),value:"none"},{label:Object(r.__)("Pulse"),value:"pulse"},{label:Object(r.__)("Tada"),value:"tada"},{label:Object(r.__)("Bounce"),value:"bounce"}],onChange:d}),"none"!==a&&wp.element.createElement("div",{className:"if-animation-enable"},wp.element.createElement(i.RangeControl,{label:Object(r.__)("Animation Duration (Seconds)"),value:f||1,onChange:h,min:1,max:9,beforeIcon:"clock",allowReset:!0}),wp.element.createElement(i.RangeControl,{label:Object(r.__)("Animation Delay (Seconds)"),value:s||1,onChange:b,min:1,max:9,beforeIcon:"clock",allowReset:!0}),wp.element.createElement(i.ToggleControl,{label:Object(r.__)("Loop Animation?"),checked:!!u,onChange:w}))))});e.a=l},function(t,e,n){"use strict";var r=n(11),o=n.n(r),i=n(0),l=(n.n(i),n(5)),c=(n.n(l),n(12)),a=(n.n(c),n(49)),u=function(t){var e=t.attributes.theme,n=t.setAttributes,r=function(t){n({theme:t})},u=function(t){n({font:t})};return wp.element.createElement(l.BlockControls,{key:"toolbar"},wp.element.createElement(c.Toolbar,null,wp.element.createElement(c.IconButton,{icon:a.a.bbutton,label:Object(i.__)("Big Button"),onClick:function(){return r("bbutton")},className:o()({"tld-selected-icon":"bbutton"===e})}),wp.element.createElement(c.IconButton,{icon:a.a.dashed,label:Object(i.__)("Dashed"),onClick:function(){return r("dashed")},className:o()({"tld-selected-icon":"dashed"===e})}),wp.element.createElement(c.IconButton,{icon:a.a.minimalist,label:Object(i.__)("Minimalist"),onClick:function(){return r("minimalist")},className:o()({"tld-selected-icon":"minimalist"===e})})),wp.element.createElement(c.Toolbar,null,wp.element.createElement(c.DropdownMenu,{icon:"editor-textcolor",label:Object(i.__)("Font"),menuLabel:Object(i.__)("Font"),controls:[{title:Object(i.__)("Poiret One"),icon:"editor-textcolor",onClick:function(){return u("poiret-one")}},{title:Object(i.__)("Lobster Two"),icon:"editor-textcolor",onClick:function(){return u("lobster-two")}},{title:Object(i.__)("Raleway"),icon:"editor-textcolor",onClick:function(){return u("raleway")}},{title:Object(i.__)("Titillium Web"),icon:"editor-textcolor",onClick:function(){return u("titillium-web")}},{title:Object(i.__)("Indie Flower"),icon:"editor-textcolor",onClick:function(){return u("indie-flower")}}]})))};e.a=u},function(t,e,n){"use strict";var r={};r.bbutton=wp.element.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#fff",id:"canvas_background",height:"402",width:"582",y:"-1",x:"-1"})),wp.element.createElement("g",null,wp.element.createElement("rect",{id:"svg_background",height:"20.0625",width:"20.0625",y:"0.027083",x:"-0.010416",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}),wp.element.createElement("rect",{id:"svg_fill",height:"0",width:"1.125",y:"17.027083",x:"13.364584",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}),wp.element.createElement("rect",{id:"svg_rect",height:"1.5",width:"15.375",y:"15.277083",x:"2.364584",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}))),r.dashed=wp.element.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#fff",id:"canvas_background",height:"402",width:"582",y:"-1",x:"-1"})),wp.element.createElement("g",null,wp.element.createElement("rect",{strokeDasharray:"2,2",id:"svg_background",height:"20.0625",width:"20.0625",y:"0.027083",x:"-0.010416",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}),wp.element.createElement("rect",{id:"svg_fill",height:"0",width:"1.125",y:"17.027083",x:"13.364584",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}),wp.element.createElement("rect",{id:"svg_rect",height:"0.250001",width:"7.9375",y:"16.214583",x:"6.03125",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}))),r.minimalist=wp.element.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#fff",id:"canvas_background",height:"402",width:"582",y:"-1",x:"-1"})),wp.element.createElement("g",null,wp.element.createElement("rect",{id:"svg_background",height:"20.0625",width:"20.0625",y:"0.027083",x:"-0.010416",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}),wp.element.createElement("rect",{id:"svg_fill",height:"0",width:"1.125",y:"17.027083",x:"13.364584",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}),wp.element.createElement("rect",{id:"svg_rect",height:"0.250001",width:"7.9375",y:"16.214583",x:"6.03125",fillOpacity:"null",strokeOpacity:"null",strokeWidth:"2",stroke:"#0f0f00",fill:"#fff"}))),e.a=r},function(t,e){},function(t,e,n){"use strict";var r=function(){return null};e.a=r}]);