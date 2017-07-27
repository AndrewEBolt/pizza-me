import Immutable from 'immutable'
import {
	addToCart,
	removeFromCart,
} from '../action/cart'

import cartReducer from './cart'

let cardState

const firstMenuItem = {
	name: 'small',
	price: 9.89,
	toppings: [
		'cheese',
	],
}

const secondMenuItem = {
	name: 'large',
	price: 10.89,
	toppings: [
		'pineapple - you monster',
	],
}

beforeEach(() => {
	cardState = cartReducer(undefined, {})
})

test('handle default', () => {
	expect(cardState.get('orders')).toBe(Immutable.fromJS([]))
})

test('handle ADD_TO_CART', () => {
	cardState = cartReducer(cardState, addToCart(firstMenuItem))
	expect(cardState.get('orders')).toEqual(Immutable.fromJS([firstMenuItem]))
})

test('handle REMOVE_FROM_CART', () => {
	// add two menuItem's to the store
	cardState = cartReducer(cardState, addToCart(firstMenuItem))
	cardState = cartReducer(cardState, addToCart(secondMenuItem))
	cardState = cartReducer(cardState, removeFromCart(0))
	expect(cardState.get('orders')).toEqual(Immutable.fromJS([secondMenuItem]))
})
