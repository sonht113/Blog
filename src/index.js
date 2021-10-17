const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const morgan = require('morgan');
const { join } = require('path');
const app = express();
const port = 8080;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();
// Use Override-method
app.use(methodOverride('_method'))

// MiddleWare xử lý body trong form để gửi lên Database 
app.use(express.urlencoded());


app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
