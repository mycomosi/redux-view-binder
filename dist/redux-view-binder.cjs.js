"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var isEqual=_interopDefault(require("lodash-es/isEqual")),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ReduxViewBinder=function(){function e(t){classCallCheck(this,e),this._store=t}return createClass(e,[{key:"bind",value:function(e,t,n,r){function i(){var i=this._store.getState(),s=e(i);if(!isEqual(s,a)){a=s;var u=a;r&&(u=r(i)),t(u,this._store.dispatch,n)}}var a=void 0,s=i.bind(this),u=this._store.subscribe(s);return s(),u}}]),e}();module.exports=ReduxViewBinder;
