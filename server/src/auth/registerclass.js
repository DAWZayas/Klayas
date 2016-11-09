export default (app) => {
  app.post('/api/registerclass', asyncRequest(async (req, res) => {
    // get class input
    const {name, date, hour, teacher} = req.body;
    // create user
    const clase = new Class({
      name,
      date,
      hour,
      teacher,
    });

    // save user
    await clase.save();

    res.sendStatus(201);
  }));
};
