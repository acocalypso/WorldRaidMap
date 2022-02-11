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

    count = raidInfo.length;
    if (count > 0) {
           raidInfo.forEach(function(raidInfo){
               const costume = raidInfo.message.costume
               const cp = raidInfo.message.cp
               const end = raidInfo.message.end
               const evolution = raidInfo.message.evolution
               const form = raidInfo.message.form
               const gender = raidInfo.message.gender
               const gym_id = raidInfo.message.gym_id
               const is_ex_raid_eligible = raidInfo.message.is_ex_raid_eligible
               const country = wc([raidInfo.message.longitude,raidInfo.message.latitude])
               const raidlvl = raidInfo.message.level
               const move_1 = raidInfo.message.move_1
               const move_2 = raidInfo.message.move_2
               const gym = raidInfo.message.name
               const pokemon_id = raidInfo.message.pokemon_id
               const spawn = raidInfo.message.spawn
               const start = raidInfo.message.start
               const team_id = raidInfo.message.team_id
               const gym_image = raidInfo.message.url
           
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
           });
       }
})
