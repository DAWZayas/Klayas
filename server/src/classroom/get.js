// npm packages
import passport from 'passport';

// our packages
import {r} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/classroom', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const classroom = await r.table('Classroom')
                             .pluck('name', 'date', 'time', 'id', 'isPublic', 'students', 'teacher', 'teacherName',  'description', 'url')
                             .orderBy(r.desc('date'));
    // send question back
    res.send(classroom);
  }));
};
