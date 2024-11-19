import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  matricule: { type: String },
  email: { type: String },
  session: { type: String }
}, {
  collection: 'users'
});

const User = mongoose.model('User', userSchema);

export default User;