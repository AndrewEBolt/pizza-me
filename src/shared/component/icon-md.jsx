import React from 'react'
import PropTypes from 'prop-types'

class IconMd extends React.Component {
	getChildContext() {
		return {
			reactIconBase: {
				size: 24,
				style: {},
			},
		}
	}

	render() {
		return this.props.children
	}
}

IconMd.childContextTypes = {
	reactIconBase: PropTypes.object,
}

IconMd.propTypes = {
	children: PropTypes.element.isRequired,
}

export default IconMd
