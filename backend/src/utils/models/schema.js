const {Schema,model} = require('mongoose')

const MySchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  name: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
  },
});

const TaskModel1 = model("todoApp",MySchema);
module.exports = {TaskModel1};