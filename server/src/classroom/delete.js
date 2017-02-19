// npm packages
import passport from 'passport';

// our packages
import {Classroom} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/classroom/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get requested question
    const classroom = await Classroom.get(req.params.id);

    // check if user is the owner
    if (req.user.id !== classroom.teacher) {
      res.status(403).send({error: 'Not enough rights to delete the classroom!'});
      return;
    }

    // delete
    await classroom.delete();

    // send success status
    res.sendStatus(204);
  }));
};
