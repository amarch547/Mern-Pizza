const express = require('express');
const Pizza = require("./models/pizzaModel")
const app = express();
const db = require("./db")
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Working");
});

app.get("/getpizzas", (req, res) => {
    Pizza.find().then((err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
        }
    })
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
});

module.exports = app;
