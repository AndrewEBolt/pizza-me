import React from 'react'
import PropTypes from 'prop-types'
import { MdClear } from 'react-icons/lib/md'
import IconMd from './icon-md'


const Order = ({ handleClick, index, name, price, toppings }) => (
	<div className="col-12 flex flex-column px2 py2 border-bottom border-gray">
		<h3>{`${name} pizza ($${price.toFixed(2)})`}</h3>
		<h4>Ordered with:</h4>
		<ul className="my0">
			{toppings.map(topping => <li key={topping}><span>{topping}</span></li>)}
		</ul>
		<button className="btn mt2 col-4 self-center" onClick={() => handleClick(index)}>
			<IconMd><MdClear /></IconMd>
		</button>
	</div>
)

Order.propTypes = {
	handleClick: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	toppings: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Order
