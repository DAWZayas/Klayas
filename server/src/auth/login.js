// npm packages
import passport from 'passport';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

// our packages
import {auth as authConfig} from '../../config';
import {User} from '../db';

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
    switch (req.body.provider) {
      case 'google': {
        const options = {
          method: 'GET',
          headers: {Authorization: `Bearer ${req.body.token}`},
        };
        fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', options)
          .then(response => response.json())
          .then((googleUser) => {
            const user = {
              email: googleUser.email,
              id: `${req.body.provider}-${googleUser.id}`,
              login: googleUser.name,
              name: googleUser.given_name,
              surname: googleUser.family_name,
              provider: req.body.provider,
            };
            const token = jwt.sign(googleUser, authConfig.jwtSecret);
            res.send({user, token});
          })
          .catch(() => res.status(401).send({error: 'Error logging in!'}));
        break;
      }
      default:
        res.status(401).send({error: 'Error logging in!'});
    }
  });
};
