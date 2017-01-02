// npm packages
import moment from 'moment';
import passport from 'passport';

// our packages
import {Classroom} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/classroom/create', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get classroom input
    const {name, date, time, isPublic, description, url} = req.body;

    // make sure name is not empty
    if (!name || !name.length) {
      res.status(400).send({error: 'The classroom must have a name!'});
      return;
    }

    // validate date is not in the past
    if (moment(date) < moment()) {
      res.status(400).send({error: 'Date should be in the future!'});
      return;
    }

    // Check if date have a correct format
    if (!moment(date, moment.ISO_8601).isValid()) {
      res.status(400).send({error: 'Date should be valid ISO Date!'});
      return;
    }

    // create classroom
    const classroom = new Classroom({
      name,
      description,
      url,
      date: moment(date).toDate(),
      time,
      teacher: req.user.id,
      teacherName: req.user.login,
      students: [],
      isPublic,
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
