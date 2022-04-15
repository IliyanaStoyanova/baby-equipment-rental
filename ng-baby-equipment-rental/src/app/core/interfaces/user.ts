import { IMain } from './main';

export interface IUser extends IMain {
  username: string;
  password: string;
  email: string;
}
