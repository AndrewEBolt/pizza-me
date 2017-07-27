import React from 'react'
import PropTypes from 'prop-types'

const CoreLayout = ({ children }) => (
	<div className="page-container flex flex-column bg-gray">
		<div className="relative content-outer bg-gray">
			{children}
		</div>
	</div>
)

CoreLayout.propTypes = {
	children: PropTypes.element.isRequired,
}

export default CoreLayout
