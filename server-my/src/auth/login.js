import passport from 'passport';

export default(app) => {
    // login method
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    if (req.user) {
      res.send({user: req.user});
    } else {
      res.status(403).send({error: 'Error logging in'});
    }
  });
 /* app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (username === 'test' && password === '123') {
      res.send({username, id: 1});
      return;
    }

    res.status(401).send({error: 'Incorrect username or password'});
  });
  */
};
