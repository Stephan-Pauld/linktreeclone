const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    backgroundColor: {
        type: String,
        required: true
    }
    // we can add more fields to our links if we want, like animations, background images, or border radius / other css properties

    //perhaps we could have a "premium" flag if someone has paid
});

module.exports = linkSchema;





//Link Subschema: This defines what each link will look like. In this case, each link has a URL and a background color. You can extend this schema to include other properties as needed.