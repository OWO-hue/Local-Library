const mongoose = require("mongoose")

const schema = mongoose.Schema

const genreSchema = new schema({
  name: {type:String, required:true, maxLength: 100, minLength: 3},
})


genreSchema.virtual("URL").get(function() {
    return `/catalog/genre/${this._id}`
})
module.exports = mongoose.model('Genre',genreSchema)