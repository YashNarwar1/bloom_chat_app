import mongoose from "mongoose";

const UserModal = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    profilePic: {
      type: String || "",
      required: false,
    },
    meta: {
      gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "male",
        required: false,
      },
      status: { type: String, default: "Hey there! I'm using ChatApp" },
      settings: {
        theme: { type: String, enum: ["light", "dark"], default: "light" },
        notifications: { type: Boolean, default: true },
      },
      backgroundImage: { type: String, default: "default-bg.png" },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserModal);

export default User;
