// eslint-disable-next-line import/prefer-default-export
export const pizzaMenuQuery = `
	{
	  pizzaSizes{
	    name
	    maxToppings
	    basePrice
	    toppings {
	      defaultSelected
	      topping {
	        name
	        price
	      }
	    }
	  }
	}
`
