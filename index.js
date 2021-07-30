const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());


//will 'reject/respond' work better than 'try/catch'or just synax?
app.post("/newEntry", async(request, response) => {
    try{
        console.log("Frontend request:", request.body)
        const {title, content, date } = request.body;
        const newEntry = await pool.query("INSERT INTO entries (title,content,date) VALUES ($1, $2, $3) RETURNING * ", 
        [title, content, date]);
        response.json(newEntry.rows[0]);
    } catch (error) {
        console.log (error.message)
    }
})

app.get("/entries", async(request1, response2) => {
    try{
        console.log("Request rec'd:", request1.body )
        const getEntries = await pool.query("SELECT * FROM entries");
        response2.json(getEntries.rows)
    } catch(error2) {
        console.log("Any error occurred:", error2.message)
    }
})

app .get("entry/:id", async(request3, response3) => {
    try {
        const { id } = request3.params;
        console.log("params:", request3.params)
        const fetchEntry = await pool.query("SELECT * FROM entries WHERE entry_id = $1", [id]);
        response3.json(fetchEntry.rows[0])
    } catch (error3) {
        console.log("An error occurred:", error3.message)
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})