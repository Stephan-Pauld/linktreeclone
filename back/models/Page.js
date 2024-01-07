const mongoose = require('mongoose');
const linkSchema = require('./Link');

const pageSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    links: [linkSchema] // these are all the links someone has on this SLUG
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;


//Page Schema: This schema includes a slug, which uniquely identifies each page, and an array of links. The links field is an array that uses the linkSchema to validate its objects.

//Unique Slug: The unique: true in the slug field ensures that each slug in the database is unique. This is important for page identification.
