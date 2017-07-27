import Immutable from 'immutable'
import {
	fetchPizzaMenuRequest,
	fetchPizzaMenuSuccess,
	fetchPizzaMenuFailure,
} from '../action/menu'

import menuReducer from './menu'
import {
	examplePizzaMenu,
	examplePizzaMenuFormatted,
} from '../../mocks'

let menuState

beforeEach(() => {
	menuState = menuReducer(undefined, {})
})

test('handle default', () => {
	expect(menuState.get('loading')).toBe(false)
	expect(menuState.get('pizzas')).toBe(Immutable.fromJS([]))
})

test('handle FETCH_PIZZA_MENU_REQUEST', () => {
	menuState = menuReducer(menuState, fetchPizzaMenuRequest())
	expect(menuState.get('loading')).toBe(true)
})

test('handle FETCH_PIZZA_MENU_SUCCESS', () => {
	menuState = menuReducer(menuState, fetchPizzaMenuSuccess(examplePizzaMenu.data))
	expect(menuState.get('loading')).toBe(false)
	expect(menuState.get('pizzas')).toEqual(Immutable.fromJS(examplePizzaMenuFormatted))
})

test('handle FETCH_PIZZA_MENU_FAILURE', () => {
	menuState = menuReducer(menuState, fetchPizzaMenuFailure())
	expect(menuState.get('loading')).toBe(false)
})
