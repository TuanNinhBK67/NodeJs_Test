const express = require('express');
const router = express.Router();

// doi tuong thi viet thuong "newsController" con class hay constructor thi viet hoa "NewsController"
const newsController = require('../app/controllers/NewsController');

//slug: what ever after /news/...
router.use('/:slug', newsController.show);
//newsController.index
router.use('/', newsController.index);


module.exports = router;