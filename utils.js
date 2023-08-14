import path from "path";
import { fileURLToPath } from "url";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import bcrypt from "bcrypt";
export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.Password);