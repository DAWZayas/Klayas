// npm packages
import passport from 'passport';

// our packages
import {asyncRequest} from '../util';
import {Class} from '../db';

export default (app) => {
  app.post('/api/class/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get class input
    const {name, date, hour, studentname, studentid} = req.body;

    // get clase data
    let clase;
    try {
      clase = await Class.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: "The class don't exist"});
      return;
    }


    // check if user is the teacher of the class is changing
    if (clase.teacher !== req.user.id) {
      res.status(403).send({error: "This class is not yours. You can't change it"});
      return;
    }

    // update data
    if (name) {
      clase.name = name;
    }
    if (date) {
      clase.date = date;
    }

    if (hour) {
      clase.hour = hour;
    }

    if (studentname) {
      const student = [{studentname, studentid}];
      console.log(student);
      clase.students.push(student);
    }


    // try to save
    try {
      await clase.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
    // send succcess
    res.send(clase);
  }));
};
