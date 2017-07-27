import React from 'react'
import PropTypes from 'prop-types'

import CartContainer from '../container/cart-container'
import MenuItem from './menu-item'

class Menu extends React.Component {
	constructor(props) {
		super(props)
		this.handleItemClick = this.handleItemClick.bind(this)
		this.state = {
			activeItem: null,
		}
	}

	componentDidMount() {
		this.props.fetchPizzaMenu()
	}

	handleItemClick(pizzaName) {
		this.setState((prevState) => {
			if (pizzaName !== prevState.activeItem) return { activeItem: pizzaName }
			return { activeItem: null }
		})
	}

	render() {
		const displayMenuItem = pizza => (
			<MenuItem
				key={pizza.name}
				active={pizza.name === this.state.activeItem}
				addToCart={this.props.addToCart}
				handleClick={this.handleItemClick}
				{...pizza}
			/>
		)

		return (
			<div className="content-inner flex flex-column items-center">
				<h1>Pizza Menu</h1>
				<div className="flex col col-12">
					<div className="col-8">
						{this.props.pizzas.map(displayMenuItem)}
					</div>
					<CartContainer />
				</div>
			</div>
		)
	}
}

Menu.propTypes = {
	addToCart: PropTypes.func.isRequired,
	fetchPizzaMenu: PropTypes.func.isRequired,
	pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu
