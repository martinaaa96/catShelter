
const router = require('express').Router();

//const Router = express.Router;
//const router= Router();
const catController = require('./controllers/catController');
const homeController = require('./controllers/homeController');
const breedController = require('./controllers/breedController');


router.get('/', homeController.getHomePage);

router.get('/404', homeController.getErrorPage);

router.get('/create', catController.getCreateCat);
router.post('/create', catController.postCreateCat);

router.get('/details/:catId', catController.getDetails);

router.use('/breed',breedController);

module.exports = router;
