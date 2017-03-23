import passport from 'passport';
import moment from 'moment';

import {Question} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/question/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const question = await Question.get(req.params.id);
      res.send(question);
    } catch (e) {
      res.status(400).send({error: e.toString()});
    }
  }));

  app.get('/api/question/', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const questions = await Question.orderBy('creationDate').limit(10);
      res.send(questions);
    } catch (e) {
      res.status(400).send({error: e.toString()});
    }
  }));
};
