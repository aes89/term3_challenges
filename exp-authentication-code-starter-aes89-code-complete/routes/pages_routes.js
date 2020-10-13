const express = require('express');
const { authorise } = require("../middleware/authorisation_middleware");
const router = express.Router();
const {
    index,
    dashboard
} = require('../controllers/page_controller');

router.get('/', index);
router.get('/dashboard', authorise, dashboard);

module.exports = router;