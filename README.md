# 401 JS -- class 36 Async Actions 

## Learning Objectives
* Students will learn to write thunk middleware for redux
* Students will learn to create async actions 

## Readings
* [Async Actions](http://redux.js.org/docs/advanced/AsyncActions.html)

## Overview
Redux thunk middlware allows you to dispatch function actions as well as function actions. Function actions will have asccess to dispatch, and getState. Function actions can trigger async events and dispatch new actions when they are completed. This is often used to make AJAX requests to the a HTTP server.
