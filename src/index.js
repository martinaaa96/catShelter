const express = require('express');

const routes = require('./routes')
const config = require('./config');
const setupViewEngine = require('./config/viewEngine');


const app = express();

setupViewEngine(app);

// second option  - require('./config/viewEngine')(app);
app.use(express.static('./src/public'));



app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));
