"use strict";var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ReduxViewBinder=function(){function e(t){classCallCheck(this,e),this._store=t}return createClass(e,[{key:"bind",value:function(e,t,n,r){function i(){var i=this._store.getState(),a=e(i);if(!this._jsonEqual(a,s)){s=a;var o=s;r&&(o=r(i)),t(o,this._store.dispatch,n)}}var s=void 0,a=i.bind(this),o=this._store.subscribe(a);return a(),o}},{key:"_jsonEqual",value:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}]),e}();module.exports=ReduxViewBinder;