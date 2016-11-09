// our packages
import {User} from '../db';
import {hash, asyncRequest} from '../util';

export const loginTaken = async (login) => {
  // check if login is already taken
  const users = await User.firlter({login}).run();
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
    const exists = await loginTaken(login);
    if (exists) {
      res.status(403).send({error: 'User already exists!'});
      return;
    }

    // save user
    await user.save();

    res.sendStatus(201);
  }));
};
