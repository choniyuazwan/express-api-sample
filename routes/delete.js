import express from 'express';
import * as User from '../models/user';

const DeleteRoute = express.Router();



/**
 * TODO:
 * - Hapus user berdasarkan user id dari parameter di url.
 * - Validasi data user jika id tidak ada,
 *   maka tampilkan response messsage not found.
 *
 * EXTRA:
 * - Tampilkan response message pesan jika
 *   data user bersangkutan telah dihapus.
 */


DeleteRoute.delete('/users/:id', (req, res, next) => {
  const deleted = User.remove(req.body);
  const message = deleted ? 'Data user telah dihapus.' : 'Data user tidak dapat dihapus.';

  res.json({ message });
});

export default DeleteRoute;
