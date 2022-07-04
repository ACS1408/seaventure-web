const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about-us"));

app.listen(3000, () => console.log('Server has been started on port 3000'));