const mongoose = require('mongoose');
<<<<<<< HEAD

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
=======
const URL = process.env.ATLAS_CONNECT_URL ? process.env.ATLAS_CONNECT_URL : 'mongodb://localhost:27017/project_3';

mongoose.connect(URL);

module.exports = mongoose.connection;
>>>>>>> 70c94d4d7fe033e27e8f20fd7bfb30807ea7cdd1
