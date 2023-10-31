import express from 'express'
import { AppDataSource } from './data-source'
import { loadavg } from 'os'
import routes from './routes'
const cors = require('cors');
//import routes from './routes'


AppDataSource.initialize().then(() => {
	const app = express()
	app.use(cors())
	app.use(express.json())

	app.use(routes)

	return app.listen(process.env.PORT )
})