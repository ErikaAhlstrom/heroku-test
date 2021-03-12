const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json([{
        name: 'Object 1',
        message: 'Hello there'
    },
    {
        name: 'Object 2',
        message: 'Hello world'
    }
])
})

const port = process.env.PORT || 3000;
app.listen(port)