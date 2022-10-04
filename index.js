const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get("/", (req, res) => res.render("index"));
app.get("/privacy-policy", (req, res) => res.render("privacy-policy"));
app.get("/terms-and-condition", (req, res) => res.render("terms-and-condition"));

app.listen(process.env.PORT || 3000, () => console.log(`Server is running on port ${process.env.PORT ? process.env.PORT : 3000}`));