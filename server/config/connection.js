const mongoose = require('mongoose');
const URL = process.env.ATLAS_URL ? process.env.ATLAS_URL : 'mongodb://localhost:27017/project_3';

mongoose.connect(URL);

module.exports = mongoose.connection;

// const mongoose = require('mongoose');

// // Wrap Mongoose around local connection to MongoDB
// mongoose.connect('mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Export connection
// module.exports = mongoose.connection;