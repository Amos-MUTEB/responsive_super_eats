const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.static('public'));
app.disable('x-powered-by');

app.use((req,res,next)=>{
    console.log(`${req.method} request from ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})

app.get('/connecter', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/connecter.html'));
})

app.get('/inscription', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/inscription.html'))
})

app.listen(3344, () => {
    console.log('Listening in port 3344');
})
