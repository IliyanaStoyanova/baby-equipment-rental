const express = require('express');
const router = express.Router();
// const { auth } = require('../utils');
const { categoryController } = require('../controllers');

// middleware that is specific to this router

router.get('/', categoryController.getCategories);
// router.post('/', auth(), categoryController.createTheme);

router.get('/:categoryId', categoryController.getCategory);
router.get('/:categoryId/sort/:sorter', categoryController.getCategorySorter);
// router.post('/:themeId', auth(), postController.createPost);
// router.put('/:themeId', auth(), themeController.subscribe);
// router.put('/:themeId/posts/:postId', auth(), postController.editPost);
// router.delete('/:themeId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router