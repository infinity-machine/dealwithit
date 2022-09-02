const { User } = require('../models');
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
  Query: {
    async getUsers(_, args) {
      return await User.find();
    },
    // async getUsers(_, args, context) {
    //   if (!context.user) throw new ApolloError('not authorized', 402);

    //   return await User.find();
    // }

  },

  Mutation: {
    async addUser(_, { email, username, password }, context) {
      try {
        const user = await User.create({ email, username, password });

        const token = signToken(user);
        return { user, token };

      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async loginUser(_, { email, password }, context) {
      const user = await User.findOne({ email });

      if (!user) throw new ApolloError('No user found with that email address');

      if (!user.validatePass(password)) throw new ApolloError('Your password is incorrect');

      try {
        const token = signToken(user);

        return { user, token };
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  }
};

module.exports = resolvers;