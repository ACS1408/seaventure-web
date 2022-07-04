const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => res.sendFile( __dirname + "/index.html" ));
app.get("/about", (req, res) => res.sendFile( __dirname + "/about-us.html" ));

app.listen(3000, () => console.log('Server has been started on port 3000'));