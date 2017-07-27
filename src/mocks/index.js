// eslint-disable-next-line import/prefer-default-export
export const examplePizzaMenu = {
	data: {
		pizzaSizes: [
			{
				name: 'small',
				maxToppings: 3,
				basePrice: 9.89,
				toppings: [
					{
						defaultSelected: false,
						topping: {
							name: 'pepperoni',
							price: 0.4,
						},
					},
					{
						defaultSelected: false,
						topping: {
							name: 'bannana peps',
							price: 0.89,
						},
					},
				],
			},
			{
				name: 'medium',
				maxToppings: 5,
				basePrice: 10.89,
				toppings: [
					{
						defaultSelected: false,
						topping: {
							name: 'pepperoni',
							price: 0.4,
						},
					},
					{
						defaultSelected: false,
						topping: {
							name: 'bannana peps',
							price: 0.89,
						},
					},
				],
			},
			{
				name: 'large',
				maxToppings: null,
				basePrice: 13.49,
				toppings: [
					{
						defaultSelected: false,
						topping: {
							name: 'pepperoni',
							price: 0.4,
						},
					},
					{
						defaultSelected: false,
						topping: {
							name: 'bannana peps',
							price: 0.89,
						},
					},
				],
			},
		],
	},
}

export const examplePizzaMenuFormatted = [
	{
		name: 'small',
		maxToppings: 3,
		basePrice: 9.89,
		toppings: [
			{
				defaultSelected: false,
				name: 'pepperoni',
				price: 0.4,
			},
			{
				defaultSelected: false,
				name: 'bannana peps',
				price: 0.89,
			},
		],
	},
	{
		name: 'medium',
		maxToppings: 5,
		basePrice: 10.89,
		toppings: [
			{
				defaultSelected: false,
				name: 'pepperoni',
				price: 0.4,
			},
			{
				defaultSelected: false,
				name: 'bannana peps',
				price: 0.89,
			},
		],
	},
	{
		name: 'large',
		maxToppings: null,
		basePrice: 13.49,
		toppings: [
			{
				defaultSelected: false,
				name: 'pepperoni',
				price: 0.4,
			},
			{
				defaultSelected: false,
				name: 'bannana peps',
				price: 0.89,
			},
		],
	},
]
