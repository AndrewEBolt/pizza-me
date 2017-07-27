// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'

import menuReducer from '../shared/reducer/menu'

const initStore = (plainPartialState: ?Object) => {
	const preloadedState = plainPartialState ? {} : undefined

	if (plainPartialState && plainPartialState.menu) {
		preloadedState.menu = menuReducer(undefined, {})
			.merge(Immutable.fromJS(plainPartialState.menu))
	}

	return createStore(combineReducers({ menu: menuReducer }),
		preloadedState, applyMiddleware(thunkMiddleWare))
}

export default initStore
