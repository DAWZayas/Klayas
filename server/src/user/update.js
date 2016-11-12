// npm packages
import passport from 'passport';

// our packages
import {dataTaken} from '../auth/';
import {User} from '../db';
import {hash, asyncRequest} from '../util/';

export default (app) => {
  app.post('/api/user/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {name, surname, email, password, passwordRepeat} = req.body;

    let user;
    try {
      user = await User.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
    }

    // check if user exists
    if (!user) {
      res.status(400).send({error: 'User does not exist'});
      return;
    }

    // check if data is actually changed
    const nameChanged = name && user.name !== name;
    const surnameChanged = surname && user.surname !== surname;
    const emailChanged = email && user.email !== email;
    const passwordChanged = password && user.password !== hash(password);
    // if not -- just send OK
    if (!nameChanged || !surnameChanged || !emailChanged || !passwordChanged) {
      res.sendStatus(204);
      return;
    }

    // check passwords match
    if (passwordChanged && password !== passwordRepeat) {
      res.status(400).send({error: 'passwords do not match!'});
      return;
    }

    // check if email is already taken
    if (emailChanged && !dataTaken(email)) {
      res.status(403).send({error: 'Email already exists!'});
      return;
    }

    // update data
    // user.name = name;
    // user.surname = surname;
    user.email = email;
    user.password = hash(password);
    // try to save
    try {
      await user.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
    }

    // send success
    res.sendStatus(204);
  }));
};
