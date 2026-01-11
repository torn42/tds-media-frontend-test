import type { ApiClient, QueryParams } from '../types/api';
import {
  UserPayloadSchema,
  UserSchema,
  type User,
  type UserPayload,
} from '../types/user';

export class UserService {
  private readonly api: ApiClient;
  private readonly endpoint = '/users';

  constructor(api: ApiClient) {
    this.api = api;
  }

  async getAll(params?: QueryParams): Promise<User[]> {
    try {
      const users = await this.api.get<User[]>(this.endpoint, params);
      return users.map((user) => UserSchema.parse(user));
    } catch (err) {
      console.error('Failed to get users from user service!', err);
      throw err;
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user = await this.api.get<User>(`${this.endpoint}/${id}`);
      return UserSchema.parse(user);
    } catch (err) {
      console.error('Failed to get user from user service!', err);
      throw err;
    }
  }

  async create(data: UserPayload): Promise<User> {
    try {
      const validatedData = UserPayloadSchema.parse(data);
      const user = await this.api.post<User>(this.endpoint, {
        ...validatedData,
        // Создание createdAt на клиенте строго в тестовом задании
        // В реальном приложении createdAt не должен прокидываться с клиента
        // Созданием createdAt должна заниматься БД
        createdAt: new Date().toISOString(),
      });
      return UserSchema.parse(user);
    } catch (err) {
      console.error('Failed to create user in user service!', err);
      throw err;
    }
  }

  async update(id: string, data: UserPayload): Promise<User> {
    try {
      const validatedData = UserPayloadSchema.parse(data);
      const user = await this.api.put<User>(
        `${this.endpoint}/${id}`,
        validatedData
      );

      return UserSchema.parse(user);
    } catch (err) {
      console.error('Failed to update user in user service!', err);
      throw err;
    }
  }

  async delete(id: string): Promise<User> {
    try {
      const user = await this.api.delete<User>(`${this.endpoint}/${id}`);
      return UserSchema.parse(user);
    } catch (err) {
      console.error('Failed to delete user in user service!', err);
      throw err;
    }
  }
}
