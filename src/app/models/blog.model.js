const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const blog = new Schema({
    image: {
        type: String,
        require: true,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
    body: {
        type: String,
        trim: true,
        maxlength: 1000,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        slug: "title",
        unique: true,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Blog', blog);