import {User} from '../db';
import {hash, asyncRequest} from '../util';

export default(app) => {
    // login method
  app.get('/api/register', asyncRequest(async(req, res) => {
    const {login, password, passwordRepeat} = req.body;
    res.send('register');
    if (password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords do not match'});
      return;
    }
    const hashedPassword = hash(password);
    const user = new User({
      login,
      password: hashedPassword,
    });
    await user.save();
    res.sendStatus(200);
  }));
};
