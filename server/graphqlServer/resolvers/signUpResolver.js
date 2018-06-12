import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import secrets from '../../config/secrets/secrets'
import { validateEmail } from '../../helpers/helpers';

import User from '../../models/User';

export default async (parent, { fullname, username, email, password1, password2 }, { req, res }) => {

  // CHECK FOR ERRORS
  const errors = validateArgs(email, password1, password2);
  if (errors.length !== 0) {
    return {
      errors,
      success: false
    }
  }

  // CHECK EXISTING USER
  const existingUser = await User.findByUsername(username);
  if (existingUser) {
    return { errors: ['A user exists already with that username'], success: false };
  }

  // CREATE NEW USER
  const user = await User.createUser(fullname, username, email, password1);

  // GEN JWT TOKEN
  const token = jwt.sign({ username: user.username, _id: user.id }, 'sdghwpoekfs-d0i', { expiresIn: '7d' });

  // SET COOKIE
  res.cookie('authentication', token, { maxAge: '90000000', httpOnly: true });
  return {
    success: true
  }
}

function validateArgs(email, password1, password2) {
  const errors = [];
  if (!validateEmail(email)) {
    errors.push('Email is not valid!')
  }
  if (password1 !== password2) {
    errors.push('Passwords don\'t match!');
  }
  return errors;
}