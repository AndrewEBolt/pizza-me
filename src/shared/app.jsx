import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from './config'
import CoreLayout from './layout/core-layout'
import Menu from './container/menu-container'

const App = () => (
	<div>
		<Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
		<CoreLayout>
			<Menu />
		</CoreLayout>
	</div>
)

export default App
