const express = require('express')
const app = express()
const port = 7500

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
