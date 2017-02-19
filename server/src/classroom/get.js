// npm packages
import passport from 'passport';

// our packages
import {r} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/classroom', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const classroom = await r.table('Classroom')
      .pluck('creationDate', 'description', 'id', 'name', 'students', 'teacher', 'teacherName')
      .orderBy(r.desc('creationDate'));
    // send question back
    res.send(classroom);
  }));
  app.get('/api/classroom/teached/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const classroom = await r.table('Classroom')
      .filter({teacher: req.params.id})
      .pluck('creationDate', 'description', 'id', 'name', 'students', 'teacher', 'teacherName')
      .orderBy(r.desc('creationDate'));
    // send question back
      res.send(classroom);
    } catch (e) {
      res.status(400).send({error: 'Esto no'});
    }
  }));
  app.get('/api/classroom/followed/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const classroom = await r.table('Classroom')
      .filter(r.row('students').contains(student => (student('studentid').match(req.params.id))))
      .pluck('creationDate', 'description', 'id', 'name', 'students', 'teacher', 'teacherName')
      .orderBy(r.desc('creationDate'));
    // send question back
      res.send(classroom);
    } catch (e) {
      res.status(400).send({error: 'Esto no'});
    }
  }));
};
