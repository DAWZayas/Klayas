// npm packages
import passport from 'passport';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

// our packages
import {auth as authConfig} from '../../config';
import {hash, logger} from '../util';
import {User} from '../db';

const userExists = async (oauthUser, provider) => {
  let user;
  try {
    user = await User.get(`${provider}-${oauthUser.id}`)
      .without(['password'])
      .execute();
  } catch (e) {
    // The user doesn't exist so it will be created in the database
    logger.info(
      `New Google user [profile: ${JSON.stringify(oauthUser)}] | Creating user...`
    );
    // hash password
    const hashedPassword = hash(oauthUser.id);
    // create user
    user = new User({
      id: `${provider}-${oauthUser.id}`,
      name: oauthUser.given_name,
      surname: oauthUser.family_name,
      login: `${oauthUser.family_name.toLowerCase()}#${oauthUser.id.substr(oauthUser.id.length - 5)}`,
      email: oauthUser.email,
      password: hashedPassword,
      avatarURL: oauthUser.picture,
    });
    // save user
    await user.save();
    // return user if successful
    delete user.password;
  }
  return user;
};

export default (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    if (req.user) {
      const token = jwt.sign(req.user, authConfig.jwtSecret);
      res.send({user: req.user, token});
    } else {
      res.status(401).send({error: 'Error logging in'});
    }
  });

  app.post('/api/oauth/login', (req, res) => {
    const provider = req.body.provider;
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${req.body.token}`},
    };
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', options)
      .then(response => response.json())
      .then(googleUser => userExists(googleUser, provider).then((user) => {
        const token = jwt.sign(user, authConfig.jwtSecret);
        res.send({user, token});
      })).catch(() => res.status(401).send({error: 'Error logging in!'}));
  });
};
