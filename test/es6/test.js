/* eslint-env node, mocha */
/* global sinon*/

import ReduxViewBinder from '../../src/redux-view-binder';

describe('ReduxViewBinder', function () {
    'use strict';

    let store;

    before(function () {

    });

    beforeEach(function () {
        store = {
            subscribe : function(){

            },
            getState : function(){
                return {};
            }
        };
    });

    afterEach(function () {

    });


    it('should filter the Redux state to pass only the necessary piece of the object to the listener', function () {

        // Given
        let model = {
            field1 : {

            },
            field2:{
                insideField2:''
            }
        };

        store = {
            getState : function(){
                return model;
            },
            dispatch : sinon.spy(),
            subscribe : function(){

            }
        };

        let watch = function(model){
            return model.field1;
        };

        let onChange = sinon.spy();

        let filter = function(model){
            return model.field2;
        };

        let binder = new ReduxViewBinder(store);

        // When
        binder.bind(watch, onChange, null, filter);

        // Then
        sinon.assert.calledWith(onChange, model.field2);

    });

    it('should listen to only a specific part of the Redux state for changes and if no filtering is specified should return the observe field', function () {

        // Given
        let model = {
            field1 : {

            },
            field2:{
                insideField2:''
            }
        };

        let modelSame = {
            field1 : {

            },
            field2:{
                insideField2:''
            }
        };

        let modelDifferent = {
            field1 : {

            },
            field2:{
                insideField2:'42'
            }
        };

        store = {
            i: -1,
            handleChange: function(){},
            getState : function(){
                this.i++;
                if (this.i % 3 === 0)
                    return model;
                if (this.i % 3 === 1)
                    return modelSame;
                if (this.i % 3 === 2)
                    return modelDifferent;

            },
            dispatch : sinon.spy(),
            subscribe : function(fn){
                this.handleChange = fn;
            }
        };

        let watch = function(model){
            return model.field2;
        };

        let onChange = sinon.spy();
        let binder = new ReduxViewBinder(store);

        // When
        binder.bind(watch, onChange);
        store.handleChange(); // Should not do anything because model is deeply equal
        store.handleChange();

        // // Then
        sinon.assert.calledTwice(onChange);
        sinon.assert.calledWith(onChange, {insideField2:''});
        sinon.assert.calledWith(onChange, {insideField2:'42'});
    });
});
