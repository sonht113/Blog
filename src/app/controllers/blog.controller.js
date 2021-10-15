class BlogController {
    // [GET] /blog
    index(req, res) {
        res.render('blog');
    }

    // [GET] /blog/:id
    show(req, res) {
        res.send('New Blog');
    }
}

module.exports = new BlogController();
