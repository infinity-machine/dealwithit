const { User } = require('../models');
const { faker } = require('@faker-js/faker');
const db = require('../config/connection');

let users = [];
let count = 50;

while (count--) {
  users.push({
    email: `${faker.word.adjective()}@${faker.word.adjective()}.com`,
    username: faker.name.firstName(),
    password: faker.word.adjective(),
    bank: 10000
  });
}

db.once('open', () => {
  User.deleteMany({}).then(() => {
    User.insertMany(users)
      .then(users => {
        console.log('FAKE USERS GENERATED BOI');
        process.exit();
      });
  });
})