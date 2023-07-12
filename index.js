const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/', (req, res) => {

    res.send(`<h1> Hello from express </h1> 
    <a href="/dogs"> Dogs page </a>
    
    `);
});

app.get('/dogs', (req, res) => {
    res.send('Dogs page')
});

app.get('/apple', (req, res) => {
    res.send('Apple page')
})

app.post('/dogs', (req, res) => {
    res.send('Dogs received');

})

app.put('/dogs', (req, res) => {
    res.send('Dogs are updated')
})

app.delete('/dogs', (req, res) => {
    res.send('Dogs are deleted')
})

app.get('/dogs/:dogId', (req, res, next) => {
    let dogId = Number(req.params.dogId);
    if (!dogId) {
        res.send('Invalid DogId!')
    } else {
        next();
    }

}, (req, res) => {

    res.send(`<h1> Hello Dogs - ID ${req.params.dogId}</h1>`)
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
