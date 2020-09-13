import knex from '../database/connection';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

function generateToken(params = {}) {
  return jwt.sign(params, String(process.env.JWT_SECRET), {
    expiresIn: 86400
  });
}

class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await knex('users')
      .where('email', email)
      .where('role', 'ADMIN')
      .first();

    if (!user) {
      return res.status(404).json([{ error: 'User not found' }]);
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json([{ error: 'Invalid password' }]);
    }

    user.password = undefined;

    return res.json({ user, token: generateToken({ id: user.id }) });
  }
}

export default AuthController;