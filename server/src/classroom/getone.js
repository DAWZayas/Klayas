import passport from 'passport';

// our packages
import {Classroom} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/classroom/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const classroom = await Classroom.get(req.params.id)
        .execute();
      res.send(classroom);
    } catch (e) {
      res.status(400).send({error: 'Classroom does not exist'});
    }
  }));
};
