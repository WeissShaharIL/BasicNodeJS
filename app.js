
const express = require('express')


const app = express()

app.use(express.json())

const example1get =  (req, res) => {
    res.status(200)
    .json({
        status: 'success',
        results: "Recieved GET for example1",
        data: {
            "example": "data"
        }
    })
}

const example1post =  (req, res) => {
    res.status(200)
    .json({
        status: 'success',
        results: "Recieved POST for example1",
        data: {
            "example": "data"
        }
    })
}


app.route('/api/v1/example1')
    .get(example1get)
    .post(example1post)

const port=3000

app.listen(port, () =>{
    console.log (`Server is listenning on port ${port}`)
})
