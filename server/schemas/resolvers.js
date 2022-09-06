const { User } = require('../models');
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');
const { sign } = require('jsonwebtoken');

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
    async addUser(_, { email, username, password, bank }, context) {
      try {
        const user = await User.create({ email, username, password, bank });

        const token = signToken(user);
        console.log(token)
        return { user, token };

      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async addBet(_, args, context) {
      if (!context.user) throw new ApolloError('You must be logged in to add a bet')
      const user = await User.findById(context.user._id)
      if (args.winner === 'player') 
        user.bank = user.bank + args.user_bet * 2
      else user.bank = user.bank - args.user_bet
      console.log(args.user_bet, user)
      user.save()
      const token = signToken(user)
      return { user, token }
    },
    // async payOut(_, args, context) {
    //   if (!context.user) throw new ApolloError('NO')

    // }

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