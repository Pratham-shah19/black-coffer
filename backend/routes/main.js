const express = require('express');
const router = express.Router();
const{getspecific,getfiltered,getdataall} = require('../controllers/main');


router.route('/data').get(getspecific);
router.route('/data/filters').get(getfiltered);
router.route('/data/all').get(getdataall);

module.exports = router;