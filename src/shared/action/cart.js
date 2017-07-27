import { createAction } from 'redux-actions'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = createAction(ADD_TO_CART)
export const removeFromCart = createAction(REMOVE_FROM_CART)
