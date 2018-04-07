const user_schema = new mongoose.Schema({
  username:  String,
  google_id: String
});

const User = mongoose.model('User', user_schema);

module.exports = User;
