import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

import { API_BASE_URL } from '../config'
import { pizzaMenuQuery } from '../../libs/queries'

export const FETCH_PIZZA_MENU_REQUEST = 'FETCH_PIZZA_MENU_REQUEST'
export const FETCH_PIZZA_MENU_SUCCESS = 'FETCH_PIZZA_MENU_SUCCESS'
export const FETCH_PIZZA_MENU_FAILURE = 'FETCH_PIZZA_MENU_FAILURE'

export const fetchPizzaMenuRequest = createAction(FETCH_PIZZA_MENU_REQUEST)
export const fetchPizzaMenuSuccess = createAction(FETCH_PIZZA_MENU_SUCCESS)
export const fetchPizzaMenuFailure = createAction(FETCH_PIZZA_MENU_FAILURE)

export const fetchPizzaMenu = () => (dispatch) => {
	dispatch(fetchPizzaMenuRequest())
	return fetch(`${API_BASE_URL}/pizza`, {
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({ query: pizzaMenuQuery }),
	})
		.then((res) => {
			if (!res.ok) throw Error(res.statusText)
			return res.json()
		})
		.then((res) => {
			if (res.data) {
				dispatch(fetchPizzaMenuSuccess(res.data))
			} else {
				dispatch(fetchPizzaMenuFailure())
			}
		})
		.catch(() => {
			dispatch(fetchPizzaMenuFailure())
		})
}
