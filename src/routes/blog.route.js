const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/blog.controller');

router.use('/:id', blogController.show);
router.use('/', blogController.index);

module.exports = router;
