const express = require('express');

const config = require('./config');
const setupViewEngine = require('./config/viewEngine');

const app = express();

setupViewEngine(app);

// second option  - require('./config/viewEngine')(app);
app.use(express.static('./src/public'));

app.get('/', (req, res) => {

    res.render('index');
});
app.get('/create', (req,res)=>{
    res.render('create');

})
app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));
