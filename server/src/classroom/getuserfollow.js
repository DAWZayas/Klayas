// npm packages
import passport from 'passport';

// our packages
import {r} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/classroom/follow/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const classroom = await r.table('Classroom')
      .filter({teacher: req.params.id})
      .pluck('name', 'date', 'time', 'id', 'isPublic', 'students', 'teacher', 'teacherName', 'description', 'url')
      .orderBy(r.desc('date'));
    // send question back
      res.send(classroom);
    } catch (e) {
      res.status(400).send({error: 'Esto no'});
    }
  }));
};
