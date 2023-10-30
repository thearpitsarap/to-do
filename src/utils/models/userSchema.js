const {Schema,model, default: mongoose} = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
},{
    timestamps:true
}
);

const userModel = model("User",userSchema);
module.exports = {userModel};