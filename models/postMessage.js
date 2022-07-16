import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  price: {
    type: Number,
    required: false,
  },
  contactNumber: {
    type: String,
    required: false,
    trim: true,
    maxlength: [20, "contact number can not be more than 20 characters"],
  },
  email: {
    type: String,
    trim: true,
    require: false
  },
  engine: {
    type: String,
    required: false,
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  year: {
    type: String,
    require: false,
    trim: true
  },
  color: {
    type: String,
    required: false,
    trim: true,
    maxlength: [12, "name can not be more than 20 characters"],
  },
  power: {
    type: Number,
    min: 0,
    required: false,
  },
  condition: {
    type: Boolean,
    required: false,
  },
  milage: {
    type: Number,
    min: 0,
    required: false,
  },
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
