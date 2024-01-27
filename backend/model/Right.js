const mongoose = require("mongoose");

const rightSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    right: {
        required: true,
        type: String,
    }
});

const Right = mongoose.model("rights", rightSchema);

module.exports = Right;
