const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/', (req, res) => {

    res.send(`<h1> Hello from express </h1> 
    <a href="/dogs"> Dogs page </a>
    
    `);
});

app.get('/dogs', (req,res)=>{
    res.send('Dogs page')
});

app.get('/apple', (req,res)=>{
    res.send('Apple page')
})

app.post('/dogs',(req,res)=>{
    res.send('Dogs received');

})

app.put('dogs',(req,res)=>{
    res.send('Dogs are deleted')
})
app.listen(5000, () => console.log('Server is listening on port 5000...'));
