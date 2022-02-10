// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
const wc = require('which-country');
// Initialize express and define a port
const app = express()
const PORT = 6525
// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())
// Start express on the defined port
app.listen(PORT, () => console.log(`?? Server running on port ${PORT}`))

app.use(bodyParser.json())
app.post("/hook", (req, res) => {
    res.status(200).end() // Responding is important
    console.log(wc([req.body.latitude, req.body.longitude]))
    console.log(req.body[0].name)
    console.log(req.body[0].level)
    console.log(req.body[0].pokemon_id)
})