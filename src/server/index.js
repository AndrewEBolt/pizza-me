import express from 'express'
import { Server } from 'http'

import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = express()
const http = Server(app)

app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
	res.send(renderApp('/', null))
})

http.listen(WEB_PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
		'(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
