const Blog = require('../models/blog.model');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class BlogController {
    // [GET] /blog
    index(req, res, next) {
        Blog.find({})
            .then(blogs => {
                res.render('blog', {
                    blogs: mutipleMongooseToObject(blogs)
                });
            })
            .catch (next);
    }
    
    // [GET] /blog/:slug
    show(req, res, next) {
        Blog.findOne({ slug: req.params.slug })
            .then(blog => {
                res.render('show', {blog: mongooseToObject(blog)});
            })
            .catch(next);
    }

    // [GET] /blog/create
    create(req, res, next) {
        res.render('blogs/create');
    }

    //[GET] /blog/me/stored/myblog
    myblog(req, res, next) {
        Blog.find({})
            .then(blog => {
                res.render('blogs/my-blog-stored', {
                    blog: mutipleMongooseToObject(blog)
                });
            })
            .catch(next);
    }

    // [GET] /myblog/:id/edit
    edit(req, res, next) {
        Blog.findById(req.params.id)
            .then(blog => res.render('blogs/edit-myblog', {
                blog: mongooseToObject(blog)
            }))
            .catch(next);
    }

    // [POST] /blog/store
    store(req, res, next) {
        const formData = req.body;
        const blog = new Blog(formData);
        blog.save()
            // After create blog, wellcoe blog page (redirect)
            .then(() => res.redirect('/blog'))
            .catch(error => {

            });
    }

    //[PUT] /blog/:id
    update(req, res, next) {
        Blog.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/blog/me/stored/myblog'))
            .catch(next);
    }
    //[DELETE] /blog/:id
    delete(req, res, next) {
        Blog.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new BlogController();
