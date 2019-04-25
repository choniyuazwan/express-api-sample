import express from 'express';
import { CekBilangan, CekBilanganInRange } from '../modules/cek-bilangan';
import * as User from '../models/user';

const ReadRoute = express.Router();

ReadRoute.get('/', (req, res, next) => {
  const message = 'get hello world';
  res.json({ message });
});

ReadRoute.get('/say/:message', (req, res, next) => {
  const { message } = req.params;
  res.json({ message });
});

ReadRoute.get('/bilangan/:start/:end', (req, res, next) => {
  const start = Number(req.params.start);
  const end = Number(req.params.end);

  if (start && end) {
    CekBilanganInRange(start, end, undefined, (hasil) => {
      res.json(hasil);
    });
  }
  else next();
});

ReadRoute.get('/bilangan/:num', (req, res, next) => {
  const angka = Number(req.params.num);

  if (angka) CekBilangan(angka, (bilangan) => {
    res.json({ angka, bilangan });
  });
  else next();
});

ReadRoute.get('/users', (req, res, next) => {
  res.json(User.findAll());
});

ReadRoute.get('/users/:id', (req, res, next) => {
  let user = User.find(req.params.id);

  if (user) res.json(user);
  else next();
});

export default ReadRoute;
