const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  date: { type: Date, default: Date.now },
  mood: { type: Number, required: true },
  comment: { type: String, default: null },
  owner: { type: Types.ObjectId, ref: "User" },
})

module.exports = model("Note", schema)
