import { createContext } from 'react';
import type { QueryParams } from '../types/api';
import type { User, UserPayload } from '../types/user';

interface UserContextType {
  users: User[];
  isLoading: boolean;
  error: string | null;
  getUsers: (params?: QueryParams) => Promise<void>;
  getUserById: (id: string) => Promise<User>;
  createUser: (data: UserPayload) => Promise<void>;
  updateUser: (id: string, data: UserPayload) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

export const UserContext = createContext<UserContextType | null>(null);
