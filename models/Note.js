var mongoose = require("mongoose");

//create a schema class
var Schema = mongoose.Schema;

//create the Note schema
var NoteSchema = new Schema({
	title:{
		type: String
	},
	date: String,
	body:{
		type: String
	}
});

//create the note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;