/** (c) 2017 Objective Systems Integrators, Inc. (MYCOM OSI) All Rights Reserved.
 *
 *   ReduxViewBinder
 */
class ReduxViewBinder {
    /**
     *  Creates a new ReduxViewBinder
     *
     * @param {Object} store - The Redux store.
     */
    constructor(store){
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
    bind(watch, onChange, view, filter){
        let currentState;

        function handleChange() {
            let model = this._store.getState();
            let nextState = watch(model);
            if (!this._jsonEqual(nextState, currentState)) {
                currentState = nextState;
                let filteredModel = currentState;
                if (filter)
                filteredModel = filter(model);
                onChange(filteredModel, this._store.dispatch, view);
            }
        }

        let fn = handleChange.bind(this);
        // subscribing to futur changes of Redux state
        let unsubscribe = this._store.subscribe(fn);
        //Force first execution of handleChange
        fn();
        return unsubscribe;
    }

    _jsonEqual(a,b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
}

export { ReduxViewBinder };
