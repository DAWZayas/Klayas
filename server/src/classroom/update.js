// npm packages
import passport from 'passport';

// our packages
import {asyncRequest} from '../util';
import {Class} from '../db';

export default (app) => {
  app.post('/api/classroom/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get classroom input
    const {name, date, hour, studentname, studentid} = req.body;

    // get classroom data
    let classroom;
    try {
      classroom = await Class.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: "The classroom don't exist"});
      return;
    }


    // check if user is the teacher of the classroom is changing
    if (classroom.teacher !== req.user.id) {
      res.status(403).send({error: "This classroom is not yours. You can't change it"});
      return;
    }

    // update data
    if (name) {
      classroom.name = name;
    }
    if (date) {
      classroom.date = date;
    }

    if (hour) {
      classroom.hour = hour;
    }

    // if (isPublic) {
    //   classroom.isPublic = isPublic;
    // }

    if (studentname) {
      if (classroom.isPublic) {
        const student = {studentname, studentid};
        classroom.students.push(student);
      } else {
        res.status(403).send({error: 'This classroom is private. Plese contact with the teacher'});
        return;
      }
    }


    // try to save
    try {
      await classroom.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
    // send succcess
    res.send(classroom);
  }));
};
