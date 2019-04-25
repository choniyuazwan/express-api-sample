import express from 'express';
import * as User from '../models/user';

const UpdateRoute = express.Router();

/**
 * TODO:
 * - Update user berdasarkan user id dari parameter di url.
 * - Validasi data user jika id tidak ada,
 *   maka tampilkan response not found.
 *
 * EXTRA:
 * - Validasi data user jika username sudah dipakai user
 *   lain, maka data tidak akan disimpan.
 * - Validasi data user email harus diisi,
 *   tidak boleh blank.
 */
UpdateRoute.put('/users/:id', (req, res, next) => {
  let user = req.body;

  const id = Number(req.params.id);
  const existingUser = User.findByUsername(user.username);

  if (!User.find(id)) return next();

  if (existingUser && existingUser.id !== id && existingUser.username === user.username) {
    res.json({message: `username ${user.username} sudah digunakan.`});
  } else if (!User.validateData(user)) {
    res.json({message: `Data user tidak valid.`});
  } else {
    user = User.update(user);

    res.json(user);
  }
});

export default UpdateRoute;
