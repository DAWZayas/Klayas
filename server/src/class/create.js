// npm packages
import moment from 'moment';
import passport from 'passport';

// our packages
import {Class} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/class/create', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get class input
    const {name, date, hour, isPublic} = req.body;

    // make sure name is not empty
    if (!name || !name.length) {
      res.status(400).send({error: 'The class must have a name!'});
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

    // create class
    const clase = new Class({
      name,
      date: moment(date).toDate(),
      hour,
      teacher: req.user.id,
      students: [],
      isPublic,
    });

    // save class
    await clase.save();
    try {
        // send class back
      res.send(clase);
    } catch (e) {
      res.stats(400).send({error: e.toString()});
    }
    res.sendStatus(201);
  }));
};
