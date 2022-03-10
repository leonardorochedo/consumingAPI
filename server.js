// rota para api
const cors = require('cors') // pagando / habilitando cors
const express = require('express') // pegando o express
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        { name: 'leonardo'},
        { name: 'mayk'}
    ])
})

app.listen('4567')