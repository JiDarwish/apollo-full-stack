import meResolver from './meResolver';
import loginResolver from './loginResolver';
import signUpResolver from './signUpResolver';


export default {
  Query: {
    me: meResolver
  },
  Mutation: {
    signUp: signUpResolver,
    login: loginResolver
  }
}