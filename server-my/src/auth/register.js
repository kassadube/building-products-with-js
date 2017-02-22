import {User} from '../db';
import {hash, asyncRequest} from '../util';

export default(app) => {
    // login method
  app.post('/api/register', asyncRequest(async(req, res) => {
    const {login, password, passwordRepeat} = req.body;
    if (password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords do not match'});
      return;
    }
    // hash passport
    const hashedPassword = hash(password);

    // check if login already taken
    const users = await User.filter({login}).run();
    if (users.length > 0) {
      res.status(403).send({error: 'User already exists'});
      return;
    }
    const user = new User({
      login,
      password: hashedPassword,
    });
    await user.save();
    res.send({success: true});
  }));
};
