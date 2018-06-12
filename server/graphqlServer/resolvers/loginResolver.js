import User from '../../models/User';
import jwt from 'jsonwebtoken';

export default async (parent, { username, password }, { req, res }) => {
  // test!!! NEEDED SOMEWHERE ELSE
  // const cookie = req.cookies.authentication;
  // console.log(cookie);
  // if (cookie) {
  //   res.clearCookie('authentication');
  //   return {
  //     success: false,
  //     errors: ['already had a cookie, it is now removed']
  //   }
  // }
  // RETRIEVE THE USER
  //

  // CHECK FOR EXISTING COOKIE
  const cookie = req.cookies.authentication;
  if (cookie) {
    return {
      success: false,
      errors: ['Already logged in!']
    }
  }

  const user = await User.authenticate(username, password);

  if (!user) {
    // EITHER USERNAME DOESN'T EXIST OR PASSWORD NOT GOOD
    return {
      success: false,
      errors: ["Username or passwrod wrong!"]
    };
  }

  // GEN JWT TOKEN
  const token = jwt.sign({ username: user.username, _id: user.id }, 'sdghwpoekfs-d0i', { expiresIn: '7d' });

  // SET COOKIE
  res.cookie('authentication', token, { maxAge: '90000000', httpOnly: true });

  return {
    success: true
  }
};