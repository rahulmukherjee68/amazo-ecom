const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");



const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    Carts:{type:Array,required:false,default:[]},
    isAdmin: { type: Boolean, default: 0 },
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
      name: this.name,
      email: this.email,
      Carts:this.Carts,
      isAdmin: this.isAdmin,
    },
    "JWT@123"
  );
  return token;
};

module.exports = User = mongoose.model("User", UserSchema);