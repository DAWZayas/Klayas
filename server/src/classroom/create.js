// npm packages
import passport from 'passport';

// our packages
import {Classroom} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/classroom/create', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get classroom input
    const {name, description} = req.body;

    // make sure name is not empty
    if (!name || !name.length) {
      res.status(400).send({error: 'The classroom must have a name!'});
      return;
    }

    // create classroom
    const classroom = new Classroom({
      name,
      description,
      teacher: req.user.id,
      teacherName: req.user.login,
      students: [],
    });

    // save classroom
    await classroom.save();
    try {
        // send classroom back
      res.send(classroom);
    } catch (e) {
      res.stats(400).send({error: e.toString()});
    }
    res.sendStatus(201);
  }));
};
