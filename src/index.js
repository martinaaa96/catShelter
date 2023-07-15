const express = require('express');

const config = require('./config');
const setupViewEngine = require('./config/viewEngine');

const app = express();

setupViewEngine(app);

// second option  - require('./config/viewEngine')(app);

app.get('/', (req, res) => {

    res.render('home');
});

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));
