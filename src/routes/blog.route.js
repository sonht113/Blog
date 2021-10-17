const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/blog.controller');

router.get('/create', blogController.create);
router.get('/me/stored/myblog', blogController.myblog);
router.get('/:id/edit', blogController.edit);
router.put('/:id', blogController.update);
router.delete('/:id', blogController.delete);
router.get('/:slug', blogController.show);
router.post('/store', blogController.store);
router.get('/', blogController.index);

module.exports = router;
