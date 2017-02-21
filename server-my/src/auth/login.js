

export default(app) => {
    // login method
  app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (username === 'test' && password === '123') {
      res.send({username, id: 1});
      return;
    }

    res.status(401).send({error: 'Incorrect username or password'});
  });
};
