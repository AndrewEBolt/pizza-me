import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ToppingsList from './toppings-list'
import ToppingItem from './topping-item'

const ItemWrapper = styled.div`
	cursor: pointer;
	&:hover {
		filter: brightness(90%);
	}
`

class MenuItem extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleToppingItemClick = this.handleToppingItemClick.bind(this)
		this.state = {
			addedToppings: [],
			totalCost: this.props.basePrice,
		}
	}

	componentDidMount() {
		const defaultToppings = []
		this.props.toppings.forEach((topping) => {
			if (topping.defaultSelected) {
				defaultToppings.push(topping.name)
			}
		})
		this.setState({ addedToppings: defaultToppings }) //eslint-disable-line
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.addToCart({
			name: this.props.name,
			price: this.state.totalCost,
			toppings: this.state.addedToppings,
		})
	}

	handleToppingItemClick(topping, price) {
		this.setState((prevState) => {
			let newPrice
			let toppings = prevState.addedToppings
			if (toppings.indexOf(topping) !== -1) {
				toppings = prevState.addedToppings.filter(selectedTopping => (
					selectedTopping !== topping
				),
				)
				newPrice = prevState.totalCost - price
			} else {
				toppings.push(topping)
				newPrice = prevState.totalCost + price
			}
			return ({
				addedToppings: toppings,
				totalCost: newPrice,
			})
		})
	}

	render() {
		const { active, basePrice, handleClick, name, maxToppings, toppings } = this.props

		const displayToppings = (topping) => {
			const selected = this.state.addedToppings.indexOf(topping.name) !== -1
			const disabled = !selected && this.state.addedToppings.length === maxToppings
			return (<ToppingItem
				disabled={disabled}
				key={topping.name}
				handleToppingItemClick={this.handleToppingItemClick}
				selected={selected}
				{...topping}
			/>
			)
		}

		const toppingsList = toppingItems => (
			<ToppingsList
				addedToppings={this.state.addedToppings}
				handleSubmit={this.handleSubmit}
				maxToppings={maxToppings}
				totalCost={this.state.totalCost}
			>
				<div>
					{toppingItems.map(displayToppings)}
				</div>
			</ToppingsList>
		)

		return (
			<div className="my2 bg-white">
				<ItemWrapper className="col-12 py4 px2 bg-white" onClick={() => { handleClick(name) }}>
					<h2>{`${name} pizza`}</h2>
					<span>{`$${basePrice}`}</span>
				</ItemWrapper>
				{ active && toppingsList(toppings) }
			</div>
		)
	}
}

MenuItem.propTypes = {
	active: PropTypes.bool.isRequired,
	addToCart: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	maxToppings: PropTypes.number,
	name: PropTypes.string.isRequired,
	basePrice: PropTypes.number.isRequired,
	toppings: PropTypes.arrayOf(PropTypes.object).isRequired,
}

MenuItem.defaultProps = {
	maxToppings: null,
}

export default MenuItem
