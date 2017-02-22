import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

import {User} from '../db';
import {hash} from '../util';

passport.serializeUser((user, done) => { done(null, user.id); });

passport.deserializeUser(async (id, done) => {
  let user = null;
  try {
    user = await User.get(id).run();
  } catch (e) {
    return done(e, false);
  }
  return done(null, user);
});


passport.use(new LocalStrategy({usernameField: 'login'}, async (login, password, done) => {
  const users = await User.filter({login}).limit(1);
  const user = users[0];
  if (!user) {
    return done(null, false);
  }
  if (user.password !== hash(password)) {
    return done(null, false);
  }
  return done(null, user);
}));

