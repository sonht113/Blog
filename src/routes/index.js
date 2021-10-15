const site = require('./site.route');
const blog = require('./blog.route');

function route(app) {
                    app.use('/blog', blog);
                app.use('/', site);
}

            module.exports = route;
