import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
	fetchPizzaMenuRequest,
	fetchPizzaMenuSuccess,
	fetchPizzaMenuFailure,
	fetchPizzaMenu,
} from './menu'

import { API_BASE_URL } from '../config'
import { examplePizzaMenu } from '../../mocks'

const mockStore = configureMockStore([thunkMiddleware])

afterEach(() => {
	fetchMock.restore()
})

const examplePizzaMenuResponse = {
	headers: {
		'content-type': 'application/json',
	},
	body: examplePizzaMenu,
}

test('fetchPizzaMenu success', () => {
	fetchMock.post(`${API_BASE_URL}/pizza`, examplePizzaMenuResponse)
	const store = mockStore()
	return store.dispatch(fetchPizzaMenu())
		.then(() => {
			expect(store.getActions()).toEqual([
				fetchPizzaMenuRequest(),
				fetchPizzaMenuSuccess(examplePizzaMenu.data),
			])
		})
})


test('fetchPizzaMenu 404', () => {
	fetchMock.post(`${API_BASE_URL}/pizza`, 404)
	const store = mockStore()
	return store.dispatch(fetchPizzaMenu())
		.then(() => {
			expect(store.getActions()).toEqual([
				fetchPizzaMenuRequest(),
				fetchPizzaMenuFailure(),
			])
		})
})

test('fetchPizzaMenu data error', () => {
	fetchMock.post(`${API_BASE_URL}/pizza`, {})
	const store = mockStore()
	return store.dispatch(fetchPizzaMenu())
		.then(() => {
			expect(store.getActions()).toEqual([
				fetchPizzaMenuRequest(),
				fetchPizzaMenuFailure(),
			])
		})
})
