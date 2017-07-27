import Immutable from 'immutable'
import {
	FETCH_PIZZA_MENU_REQUEST,
	FETCH_PIZZA_MENU_SUCCESS,
	FETCH_PIZZA_MENU_FAILURE,
} from '../action/menu'

const initialState = Immutable.fromJS({
	pizzas: [],
	loading: false,
})

const normalizePizzaMenu = (rawPizzaData) => {
	const formattedPizzaData = rawPizzaData.pizzaSizes.map((pizza) => {
		const formattedToppings = pizza.toppings.reduce((acc, item) => {
			const { topping, ...rest } = item
			const formattedTopping = {
				...rest,
				...topping,
			}
			acc.push(formattedTopping)
			return acc
		}, [])
		const formattedPizza = {
			...pizza,
			toppings: formattedToppings,
		}
		return formattedPizza
	})
	return formattedPizzaData
}

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_PIZZA_MENU_REQUEST:
		return state.set('loading', true)
	case FETCH_PIZZA_MENU_SUCCESS:
		return state
			.set('loading', false)
			.set('pizzas', normalizePizzaMenu(action.payload))
	case FETCH_PIZZA_MENU_FAILURE:
		return state.set('loading', false)
	default:
		return state
	}
}

export default menuReducer

