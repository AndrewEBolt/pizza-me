import React from 'react'
import PropTypes from 'prop-types'

const ToppingItem = ({
	defaultSelected,
	disabled,
	handleToppingItemClick,
	name,
	price,
	selected,
}) => {
	const handleClick = (event) => {
		if (defaultSelected) {
			event.preventDefault()
		} else {
			handleToppingItemClick(name, price)
		}
	}

	const label = defaultSelected ? `${name} (included)` : `${name} ($${price.toFixed(2)})`

	return (<div className="my1">
		<input className="mr1" type="checkbox" id={name} checked={selected} disabled={disabled} onChange={(event) => { handleClick(event) }} />
		<label htmlFor={name}>{label}</label>
	</div>
	)
}

ToppingItem.propTypes = {
	defaultSelected: PropTypes.bool.isRequired,
	disabled: PropTypes.bool.isRequired,
	handleToppingItemClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	selected: PropTypes.bool.isRequired,
}

export default ToppingItem
