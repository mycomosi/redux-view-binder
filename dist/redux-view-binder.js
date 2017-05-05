(function (exports) {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var ReduxViewBinder = function () {
    function ReduxViewBinder(store) {
        classCallCheck(this, ReduxViewBinder);

        this._store = store;
    }

    /**
    * Specifies which part of the Redux state object is observed. When this
    * sub-part of the Redux state changes then the onChange method is called.
    * The equality is tested using JSON.stringify.
    *
    * @callback watchCb
    * @param {Object} state - The current Redux state.
    * @Returns {Object} the sub-part of the Redux state object that should be observed.
    *
    */

    /**
    * Specifies which part of the Redux state object is passed to the onChange method. It is especialy useful to pass a higher level sub-part of the Redux state object that the one watched.
    *
    * @callback filterCb
    * @param {Object} state - The current Redux state.
    * @Returns {Object} the sub-part of the Redux state object that should be observed.
    *
    */

    /**
    * The Reduc dispatch function.
    *
    * @callback dispatchCb
    * @param {Object} action - The action to dispatch.
    *
    */

    /**
    * Specifies which part of the Redux state object is passed to the onChange method.
    *
    * @callback onChangeCb
    * @param {Object} filteredModel - The filtered Redux state object.
    * @param {dispatchCb} dispatch - The dispatch function.
    * @param {Object} [view] - The view bound.
    *
    */

    /**
    * Use this method to bind the view to model changes. The view can be passed as parameter or using side effects inside the onChange method.
    *
    * @param {watchCb} watch - The watch function.
    * @param {onChangeCb} onChange - The onChange function.
    * @param {Object} [view] - The view to be bound to model changes.
    * @param {filterCb} [filter] - The filter function.
    *
    */


    createClass(ReduxViewBinder, [{
        key: "bind",
        value: function bind(watch, onChange, view, filter) {
            var currentState = void 0;

            function handleChange() {
                var model = this._store.getState();
                var nextState = watch(model);
                if (!this._jsonEqual(nextState, currentState)) {
                    currentState = nextState;
                    var filteredModel = currentState;
                    if (filter) filteredModel = filter(model);
                    onChange(filteredModel, this._store.dispatch, view);
                }
            }

            var fn = handleChange.bind(this);
            // subscribing to futur changes of Redux state
            var unsubscribe = this._store.subscribe(fn);
            //Force first execution of handleChange
            fn();
            return unsubscribe;
        }
    }, {
        key: "_jsonEqual",
        value: function _jsonEqual(a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
        }
    }]);
    return ReduxViewBinder;
}();

exports.ReduxViewBinder = ReduxViewBinder;

}((this.ReduxViewBinder = this.ReduxViewBinder || {})));
