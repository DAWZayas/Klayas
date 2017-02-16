// npm packages
import passport from 'passport';

// our packages
import {asyncRequest} from '../util';
import {Classroom} from '../db';

export default (app) => {
  app.post('/api/classroom/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get classroom input
    const {name, date, hour, studentname, studentid, description, url} = req.body;

    // get classroom data
    let classroom;
    try {
      classroom = await Classroom.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: "The classroom don't exist"});
      return;
    }


    // check if user is the teacher of the classroom is changing
    // if (classroom.teacher !== req.user.id) {
    //   res.status(403).send({error: "This classroom is not yours. You can't change it"});
    //   return;
    // }

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

    if (description) {
      classroom.description = description;
    }

    classroom.url = url;

    if (classroom.students.find(student => (student.studentid === studentid)) !== undefined) {
      res.status(403).send({error: 'You have already joined to this classroom'});
      return;
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
