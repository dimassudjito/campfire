const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");
const path =  require('path');
const PORT = process.env.PORT || 5000;

/* middleware */
app.use(cors());
app.use(express.json())

/* creating router */
// create a story
app.post("/stories", async (req, res) => {
    try {
        const {title, content, burn} = req.body;
        const newStory = await pool.query(
            "INSERT INTO stories(title, content) VALUES($1, $2) RETURNING *",
            [title, content]
        );
        res.json(newStory.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})
// get all stories
app.get("/stories", async (req,res) => {
    try {
        const allStories = await pool.query("SELECT * FROM stories")
        res.json(allStories.rows)
    } catch (err) {
        console.error(err.message);
    }
})
// delete a story
app.delete("/stories/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteStory = await pool.query(
            "DELETE FROM stories WHERE id = $1",
            [id]
        );
        res.json("story was deleted")
    } catch (err) {
        console.error(err.message);
    }
})
// update a story's burn
app.put("/stories/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {burn} = req.body;
        const updateStory = await pool.query(
            "UPDATE stories SET burn = burn+1 WHERE id = $1",
            [id]
        );
        res.json("story was updated");
    } catch (err) {
        console.error(err.message);
    }
})


/* initializing server */
app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`)
})