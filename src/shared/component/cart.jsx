import React from 'react'
import PropTypes from 'prop-types'
import Order from './order'

const Cart = ({ orders, removeFromCart }) => {
	const displayOrders = (order, index) => (
		<Order key={index} index={index} handleClick={removeFromCart} {...order} />
	)
	const totalOrderPrice = orders.reduce((total, order) => (
		total + order.price
	), 0)

	return (<div className="col-4 ml2 my2 px1 bg-white">
		{ orders.length === 0 && <h2 className="center">Click on a pizza to make an order</h2> }
		{ orders.map(displayOrders) }
		{orders.length !== 0 && <h3 className="right px2">{`total: $${totalOrderPrice.toFixed(2)}`}</h3>}
	</div>)
}

Cart.propTypes = {
	orders: PropTypes.arrayOf(PropTypes.object).isRequired,
	removeFromCart: PropTypes.func.isRequired,
}

export default Cart
