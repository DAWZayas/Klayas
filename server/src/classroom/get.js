// our packages
import {Class} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/classroom/:id', asyncRequest(async (req, res) => {
    // get requested classroom
    try {
      const classroom = await Class.get(req.params.id);
        // send classroom back
      res.send(classroom);
    } catch (e) {
      res.stats(400).send({error: e.toString()});
    }
  }));
};
