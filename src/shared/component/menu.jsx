import React from 'react'
import PropTypes from 'prop-types'

class Menu extends React.Component {
	componentDidMount() {
		this.props.fetchPizzaMenu()
	}

	render() {
		return (
			<div className="content-inner flex items-center">
				<h1>Pizza Menu</h1>
			</div>
		)
	}
}

Menu.propTypes = {
	fetchPizzaMenu: PropTypes.func.isRequired,
}

export default Menu
