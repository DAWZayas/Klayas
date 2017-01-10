// npm packages
import validator from 'validator';

// our packages
import {User} from '../db';
import {hash, asyncRequest} from '../util';

const loginTaken = async (login) => {
  // check if login is already taken
  const users = await User.filter({login}).run();
  return users.length > 0;
};

export const emailTaken = async (email) => {
  // check if email is already taken
  const users = await User.filter({email}).run();
  return users.length > 0;
};

export default (app) => {
  app.post('/api/register', asyncRequest(async (req, res) => {
    // get user input
    const {name, surname, login, email, password, passwordRepeat} = req.body;
    // check if passwords match
    if (password !== passwordRepeat) {
      res.status(400).send({error: 'passwords do not match!'});
      return;
    }
    // hash password
    const hashedPassword = hash(password);
    // create user
    const user = new User({
      name,
      surname,
      login,
      email,
      password: hashedPassword,
    });
    // check if login is already taken
    const loginExists = await loginTaken(login);
    if (loginExists) {
      res.status(403).send({error: 'User already exists!'});
      return;
    }

    // check if email is valid
    if (!validator.isEmail(email)){
      res.status(400).send({error: 'The email does not seem valid'});
      return;
    }

    // check if email is already taken
    const emailExists = await emailTaken(email);
    if (emailExists) {
      res.status(403).send({error: 'Email already exists!'});
      return;
    }

    // save user
    await user.save();

    res.sendStatus(201);
  }));
};
