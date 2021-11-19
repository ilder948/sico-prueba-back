const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const sequelize = require('./src/libs/database')
const config = require('./src/config/index')
const router = require('./src/router/index')


app.use('*', cors())
app.use(express.json({ limit: '100gb', extended: true }))
app.use(express.urlencoded({ limit: '100gb', extended: true }))
app.use(morgan('dev'))
router(app)


app.listen(config.PORT, async(req, res) => {
    console.log(`[SERVER] => run ${config.PORT}`)
    sequelize.sync({force: false}).then(() => {
        console.log('Database Connected')
    }).catch(error => {
        console.error('Error Connected Database', error)
    })
})