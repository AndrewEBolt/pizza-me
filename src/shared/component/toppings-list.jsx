import React from 'react'
import PropTypes from 'prop-types'

const ToppingsList = ({ addedToppings, children, handleSubmit, maxToppings, totalCost }) => {
	const toppingsCounter = () => {
		if (maxToppings) return `${addedToppings.length}/${maxToppings}`
		return 'Pick as many as you want!'
	}

	return (<form className="col-12 pb3 px2" onSubmit={handleSubmit}>
		<h3>Add some toppings! <span>{toppingsCounter()}</span></h3>
		{children}
		<button className="btn btn-primary mt2" type="submit">{`Add to Cart $${totalCost.toFixed(2)}`}</button>
	</form>)
}

ToppingsList.propTypes = {
	addedToppings: PropTypes.arrayOf(PropTypes.string).isRequired,
	children: PropTypes.element.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	maxToppings: PropTypes.number,
	totalCost: PropTypes.number.isRequired,
}

ToppingsList.defaultProps = {
	maxToppings: null,
}

export default ToppingsList
