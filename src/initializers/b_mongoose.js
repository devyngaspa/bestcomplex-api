module.exports = {

  initialize: () => {
    mongoose.connect('mongodb://localhost/bestcomplex_dev');
    db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    });
  }

}
