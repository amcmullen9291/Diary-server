const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());
app.use(express.json());


//will 'reject/respond' work better than 'try/catch'or just synax?
app.post("/entry", async(request, response) => {
    try{
        console.log("Frontend request:", request.body)
        const submittedEntry = request.body;
        const newEntry = await pool.query("INSERT INTO entries (title,content,date) VALUES ($1, $2, $3) RETURNING * ", 
        [title, content, date]);
        response.json(newEntry.rows[0]);
    } catch (error) {
        console.log (error.message)
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})