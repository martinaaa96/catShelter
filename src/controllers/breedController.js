const router = require('express').Router();


router.get('/create',(req,res)=>{
res.render('breed/create');


});

module.exports = router;