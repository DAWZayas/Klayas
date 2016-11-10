// our packages
import {Class} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/class/:id', asyncRequest(async (req, res) => {
    // get requested class
    try {
      const clase = await Class.get(req.params.id);
        // send question back
      res.send(clase);
    } catch (e) {
      res.stats(400).send({error: e.toString()});
    }
  }));
};
