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

            var unsubscribe = this._store.subscribe(handleChange);
            handleChange();
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

export { ReduxViewBinder };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtdmlldy1iaW5kZXIuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1eC12aWV3LWJpbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVkdXhWaWV3QmluZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHN0b3JlKXtcbiAgICAgICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFNwZWNpZmllcyB3aGljaCBwYXJ0IG9mIHRoZSBSZWR1eCBzdGF0ZSBvYmplY3QgaXMgb2JzZXJ2ZWQuIFdoZW4gdGhpc1xuICAgICogc3ViLXBhcnQgb2YgdGhlIFJlZHV4IHN0YXRlIGNoYW5nZXMgdGhlbiB0aGUgb25DaGFuZ2UgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAqIFRoZSBlcXVhbGl0eSBpcyB0ZXN0ZWQgdXNpbmcgSlNPTi5zdHJpbmdpZnkuXG4gICAgKlxuICAgICogQGNhbGxiYWNrIHdhdGNoQ2JcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIFRoZSBjdXJyZW50IFJlZHV4IHN0YXRlLlxuICAgICogQFJldHVybnMge09iamVjdH0gdGhlIHN1Yi1wYXJ0IG9mIHRoZSBSZWR1eCBzdGF0ZSBvYmplY3QgdGhhdCBzaG91bGQgYmUgb2JzZXJ2ZWQuXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIFNwZWNpZmllcyB3aGljaCBwYXJ0IG9mIHRoZSBSZWR1eCBzdGF0ZSBvYmplY3QgaXMgcGFzc2VkIHRvIHRoZSBvbkNoYW5nZSBtZXRob2QuIEl0IGlzIGVzcGVjaWFseSB1c2VmdWwgdG8gcGFzcyBhIGhpZ2hlciBsZXZlbCBzdWItcGFydCBvZiB0aGUgUmVkdXggc3RhdGUgb2JqZWN0IHRoYXQgdGhlIG9uZSB3YXRjaGVkLlxuICAgICpcbiAgICAqIEBjYWxsYmFjayBmaWx0ZXJDYlxuICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gVGhlIGN1cnJlbnQgUmVkdXggc3RhdGUuXG4gICAgKiBAUmV0dXJucyB7T2JqZWN0fSB0aGUgc3ViLXBhcnQgb2YgdGhlIFJlZHV4IHN0YXRlIG9iamVjdCB0aGF0IHNob3VsZCBiZSBvYnNlcnZlZC5cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogVGhlIFJlZHVjIGRpc3BhdGNoIGZ1bmN0aW9uLlxuICAgICpcbiAgICAqIEBjYWxsYmFjayBkaXNwYXRjaENiXG4gICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIC0gVGhlIGFjdGlvbiB0byBkaXNwYXRjaC5cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogU3BlY2lmaWVzIHdoaWNoIHBhcnQgb2YgdGhlIFJlZHV4IHN0YXRlIG9iamVjdCBpcyBwYXNzZWQgdG8gdGhlIG9uQ2hhbmdlIG1ldGhvZC5cbiAgICAqXG4gICAgKiBAY2FsbGJhY2sgb25DaGFuZ2VDYlxuICAgICogQHBhcmFtIHtPYmplY3R9IGZpbHRlcmVkTW9kZWwgLSBUaGUgZmlsdGVyZWQgUmVkdXggc3RhdGUgb2JqZWN0LlxuICAgICogQHBhcmFtIHtkaXNwYXRjaENifSBkaXNwYXRjaCAtIFRoZSBkaXNwYXRjaCBmdW5jdGlvbi5cbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbdmlld10gLSBUaGUgdmlldyBib3VuZC5cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogVXNlIHRoaXMgbWV0aG9kIHRvIGJpbmQgdGhlIHZpZXcgdG8gbW9kZWwgY2hhbmdlcy4gVGhlIHZpZXcgY2FuIGJlIHBhc3NlZCBhcyBwYXJhbWV0ZXIgb3IgdXNpbmcgc2lkZSBlZmZlY3RzIGluc2lkZSB0aGUgb25DaGFuZ2UgbWV0aG9kLlxuICAgICpcbiAgICAqIEBwYXJhbSB7d2F0Y2hDYn0gd2F0Y2ggLSBUaGUgd2F0Y2ggZnVuY3Rpb24uXG4gICAgKiBAcGFyYW0ge29uQ2hhbmdlQ2J9IG9uQ2hhbmdlIC0gVGhlIG9uQ2hhbmdlIGZ1bmN0aW9uLlxuICAgICogQHBhcmFtIHtPYmplY3R9IFt2aWV3XSAtIFRoZSB2aWV3IHRvIGJlIGJvdW5kIHRvIG1vZGVsIGNoYW5nZXMuXG4gICAgKiBAcGFyYW0ge2ZpbHRlckNifSBbZmlsdGVyXSAtIFRoZSBmaWx0ZXIgZnVuY3Rpb24uXG4gICAgKlxuICAgICovXG4gICAgYmluZCh3YXRjaCwgb25DaGFuZ2UsIHZpZXcsIGZpbHRlcil7XG4gICAgICAgIGxldCBjdXJyZW50U3RhdGU7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5fc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIGxldCBuZXh0U3RhdGUgPSB3YXRjaChtb2RlbCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2pzb25FcXVhbChuZXh0U3RhdGUsIGN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkTW9kZWwgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcilcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZE1vZGVsID0gZmlsdGVyKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShmaWx0ZXJlZE1vZGVsLCB0aGlzLl9zdG9yZS5kaXNwYXRjaCwgdmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdW5zdWJzY3JpYmUgPSB0aGlzLl9zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgICB9XG5cbiAgICBfanNvbkVxdWFsKGEsYikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWR1eFZpZXdCaW5kZXIiLCJzdG9yZSIsIl9zdG9yZSIsIndhdGNoIiwib25DaGFuZ2UiLCJ2aWV3IiwiZmlsdGVyIiwiY3VycmVudFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwibW9kZWwiLCJnZXRTdGF0ZSIsIm5leHRTdGF0ZSIsIl9qc29uRXF1YWwiLCJmaWx0ZXJlZE1vZGVsIiwiZGlzcGF0Y2giLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImEiLCJiIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLGVBQWI7NkJBRWdCQyxLQUFaLEVBQWtCOzs7YUFDVEMsTUFBTCxHQUFjRCxLQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBa0RDRSxLQXJEVCxFQXFEZ0JDLFFBckRoQixFQXFEMEJDLElBckQxQixFQXFEZ0NDLE1BckRoQyxFQXFEdUM7Z0JBQzNCQyxxQkFBSjs7cUJBRVNDLFlBQVQsR0FBd0I7b0JBQ2hCQyxRQUFRLEtBQUtQLE1BQUwsQ0FBWVEsUUFBWixFQUFaO29CQUNJQyxZQUFZUixNQUFNTSxLQUFOLENBQWhCO29CQUNJLENBQUMsS0FBS0csVUFBTCxDQUFnQkQsU0FBaEIsRUFBMkJKLFlBQTNCLENBQUwsRUFBK0M7bUNBQzVCSSxTQUFmO3dCQUNJRSxnQkFBZ0JOLFlBQXBCO3dCQUNJRCxNQUFKLEVBQ0FPLGdCQUFnQlAsT0FBT0csS0FBUCxDQUFoQjs2QkFDU0ksYUFBVCxFQUF3QixLQUFLWCxNQUFMLENBQVlZLFFBQXBDLEVBQThDVCxJQUE5Qzs7OztnQkFJSlUsY0FBYyxLQUFLYixNQUFMLENBQVljLFNBQVosQ0FBc0JSLFlBQXRCLENBQWxCOzttQkFFT08sV0FBUDs7OzttQ0FHT0UsQ0F6RWYsRUF5RWlCQyxDQXpFakIsRUF5RW9CO21CQUNMQyxLQUFLQyxTQUFMLENBQWVILENBQWYsTUFBc0JFLEtBQUtDLFNBQUwsQ0FBZUYsQ0FBZixDQUE3Qjs7Ozs7OyJ9
