const express = require('express');

const routes = require('./routes')
const config = require('./config');
const setupViewEngine = require('./config/viewEngine');
const initDataBase = require('./config/dataBaseInit');


const app = express();

setupViewEngine(app);

// second option  - require('./config/viewEngine')(app);
app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false})); 
app.use(routes);


initDataBase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`)))
    .catch((err) => console.log(err.message));

