import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true
  }
});


UserSchema.statics.createUser = async function (fullname, username, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  return new this({ fullname, username, email, password: hashedPass }).save();
}

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username })
}

export default mongoose.model('User', UserSchema);