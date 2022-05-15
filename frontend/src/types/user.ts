import { Role } from "./role";

export type User = {
  id: number;
  email: string;
};

export type Users = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  roles: Role[];
};

export type UsersUpdate = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  roles: Role[];
};
