require("dotenv").config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/note', require('./routes/note.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, console.log(`App is started on port ${PORT}`))
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()
