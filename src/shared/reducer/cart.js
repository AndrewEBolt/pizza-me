import Immutable from 'immutable'
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
} from '../action/cart'

const initialState = Immutable.fromJS({
	orders: [],
})

const addOrder = (currentOrders, newOrder) => {
	const currentOrdersArray = currentOrders.toJS()
	const newOrders = [
		...currentOrdersArray,
		newOrder,
	]
	return Immutable.fromJS(newOrders)
}

const removeOrder = (currentOrders, index) => Immutable.fromJS(currentOrders.splice(index, 1))

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_TO_CART:
		return state.set('orders', addOrder(state.get('orders'), action.payload))
	case REMOVE_FROM_CART:
		return state.set('orders', removeOrder(state.get('orders'), action.payload))
	default:
		return state
	}
}

export default cartReducer
