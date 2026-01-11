import { useCallback, useState, type ReactNode } from 'react';
import { AxiosApiClient } from '../api/axios-api-client';
import { UserService } from '../services/user.service';
import type { User, UserPayload } from '../types/user';
import { UserContext } from './UserContext';
import { ENV } from '../config/env';

const apiClient = new AxiosApiClient(ENV.API_BASE_URL);
const userService = new UserService(apiClient);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await userService.getAll();
      setUsers(data);
    } catch {
      setError('Не удалось загрузить пользователей, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUserById = useCallback(async (id: string) => {
    try {
      const user = await userService.findById(id);
      if (!user) throw new Error('Не удалось найти пользователя с таким id.');
      return user;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }, []);

  const updateUser = async (id: string, data: UserPayload) => {
    const updated = await userService.update(id, data);
    setUsers((prev) => prev.map((u) => (u.id === id ? updated : u)));
  };

  const createUser = async (data: UserPayload) => {
    const created = await userService.create(data);
    setUsers((prev) => [...prev, created]);
  };

  const deleteUser = async (id: string) => {
    const previousUsers = [...users];
    setUsers((prev) => prev.filter((u) => u.id !== id));

    try {
      await userService.delete(id);
    } catch {
      setUsers(previousUsers);
      setError('Ошибка при обновлении данных.');
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        error,
        getUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
