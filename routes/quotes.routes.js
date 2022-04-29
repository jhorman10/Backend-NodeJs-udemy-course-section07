const router = require('express').Router();
const { QuotesController } = require('../controllers');

router.get('/quotes', QuotesController.index);
router.get('/quotes/all', QuotesController.getQuotes);
router.post('/quotes/add', QuotesController.addQuote);

module.exports = router;
