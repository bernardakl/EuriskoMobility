/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStore, applyMiddleware } from 'redux';
import {
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import { appReducer } from 'reducer/';
import { AppNavigator } from './src/router/index';

import ReduxThunk from 'redux-thunk';
const middleware = createReactNavigationReduxMiddleware(
    // 'root',
    state => state.nav
);
console.disableYellowBox = true;
class App extends React.Component {
    constructor(properties) {
        super(properties);
        // OneSignal.init("56542693-e3a3-4439-8357-6c513506e6b9");
    }
    render() {
        return (
            <AppNavigator  />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware, ReduxThunk));

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState  />
            </Provider>
        );
    }
}
