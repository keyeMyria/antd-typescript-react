webpackJsonp([5],{1313:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),u=n(180),a=n(1777),r=function(t){function e(n){babelHelpers.classCallCheck(this,e);var o=babelHelpers.possibleConstructorReturn(this,t.call(this,n));return o.state={value:"",data:[]},o}return babelHelpers.inherits(e,t),e.prototype.fetch=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.curValue=t;var o=function(){a("https://suggest.taobao.com/sug?q="+t).then(function(t){return t.json()}).then(function(o){if(e.curValue==t){var u=void 0;u=o.result.map(function(t){return{value:t[0],text:t[0]}}),n(u)}})};this.timeout=setTimeout(function(){return o()},300)},e.prototype.handleValueChange=function(t){var e=this;this.setState({value:t}),this.fetch(t,function(t){return e.setState({data:t})})},e.prototype.onMenuClick=function(t){console.log(t.key),this.setState({value:t.key})},e.prototype.render=function(){var t=this,e=o.createElement(u.Menu,{onClick:function(e){return t.onMenuClick(e)}},this.state.data.map(function(t){return o.createElement(u.Menu.Item,{key:t.value},t.text)}));return o.createElement(u.Card,null,o.createElement(u.Row,{type:"flex",justify:"center"},o.createElement(u.Dropdown,{trigger:["click"],overlay:e},o.createElement(u.Input,{value:this.state.value,placeholder:"input search text",style:{width:"60%"},onChange:function(e){return t.handleValueChange(e.target.value)}}))))},e}(o.Component);e.default=r},1777:function(t,e,n){var o,u,a;!function(n,r){u=[e,t],o=r,void 0!==(a="function"==typeof o?o.apply(e,u):o)&&(t.exports=a)}(0,function(t,e){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(t){try{delete window[t]}catch(e){window[t]=void 0}}function u(t){var e=document.getElementById(t);document.getElementsByTagName("head")[0].removeChild(e)}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=t,i=e.timeout||r.timeout,l=e.jsonpCallback||r.jsonpCallback,c=void 0;return new Promise(function(r,s){var h=e.jsonpCallbackFunction||n(),f=l+"_"+h;window[h]=function(t){r({ok:!0,json:function(){return Promise.resolve(t)}}),c&&clearTimeout(c),u(f),o(h)},a+=-1===a.indexOf("?")?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+a+l+"="+h),p.id=f,document.getElementsByTagName("head")[0].appendChild(p),c=setTimeout(function(){s(new Error("JSONP request to "+t+" timed out")),o(h),u(f)},i)})}var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};e.exports=a})}});