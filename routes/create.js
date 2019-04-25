import express from 'express';
import * as User from '../models/user';

const CreateRoute = express.Router();

CreateRoute.post('/users', (req, res, next) => {
  const user = User.insert(req.body);

  res.json(user);
});

export default CreateRoute;
