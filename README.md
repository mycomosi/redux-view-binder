# redux-view-binder
[![Build Status](https://travis-ci.org/mycomosi/redux-view-binder.svg?branch=master)](https://travis-ci.org/mycomosi/redux-view-binder)
[![Coverage Status](https://coveralls.io/repos/github/mycomosi/redux-view-binder/badge.svg?branch=master)](https://coveralls.io/github/mycomosi/redux-view-binder?branch=master)<br>
Bind you web-component views easily with Redux (no React, no Polymer).

## Binding Views
Redux is a very nice library to centralize the management of the state of your application. The goal of redux-view-binder is to provide a small helper to 'bind' your views to your Redux state changes. Simply said, it means refreshing your views based on the changes of your Redux state automatically.

If you are using React, you might want to have a look at react-redux which provide this capability and more. Redux-view-binder is framework agnostic and can be used with any View library.

Quick example, let's imagine we have a todolist view, where we display a list of todos. Inside our Redux state we have a todos field.

```Javascript
// Create binder using store from Redux
const binder = new ReduxViewBinder(store);

//... some time later
//retrieve the web component
let todoList = document.querySelector('#todolist');

//bind the component to Redux state changes
binder.bind(
    (model) => { return state.todos; }, //only watch changes of todos field.
    (todos) => {    
        //if todos field has changed then we should refresh  the todoList view
        todoList.refresh(todos);
    }
);

```
