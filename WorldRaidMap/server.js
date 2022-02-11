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
    const raidInfo = req.body 
    console.log(req.body)
    const costume = raidInfo[0].message.costume
    const cp = raidInfo[0].message.cp
    const end = raidInfo[0].message.end
    const evolution = raidInfo[0].message.evolution
    const form = raidInfo[0].message.form
    const gender = raidInfo[0].message.gender
    const gym_id = raidInfo[0].message.gym_id
    const is_ex_raid_eligible = raidInfo[0].message.is_ex_raid_eligible
    const country = wc([raidInfo[0].message.longitude,raidInfo[0].message.latitude])
    const raidlvl = raidInfo[0].message.level
    const move_1 = raidInfo[0].message.move_1
    const move_2 = raidInfo[0].message.move_2
    const gym = raidInfo[0].message.name
    const pokemon_id = raidInfo[0].message.pokemon_id
    const spawn = raidInfo[0].message.spawn
    const start = raidInfo[0].message.start
    const team_id = raidInfo[0].message.team_id
    const gym_image = raidInfo[0].message.url

    const startDateTime = new Date(start*1000)
    const endDateTime = new Date(end*1000)
    


    
    console.log("Country: " + country)
    console.log("Gym: " + gym)
    console.log("Raid Level:" + raidlvl)
    console.log("PokemonID: " + pokemon_id)
    if(pokemon_id == 0){
        console.log("Egg: true")        
    }else {
        console.log("start: " + startDateTime.toLocaleString())
        console.log("end: " + endDateTime.toLocaleString())
        console.log("CP: " + cp)
        console.log("Move_1: " + move_1)
        console.log("Move_2: " + move_2)
        console.log("Egg: false")
    }
})
