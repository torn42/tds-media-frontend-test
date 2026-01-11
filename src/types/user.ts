import z from 'zod';
import { USER_VALIDATION } from '../constants/validation';

export const SkillSchema = z.array(z.string());

export type Skill = z.infer<typeof SkillSchema>;

export const UserSchema = z.object({
  id: z.coerce.string(), // в идеале должен был быть uuid, но api-сервис сам создает id в виде int
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  skills: SkillSchema,
  createdAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

export const UserPayloadSchema = UserSchema.omit({
  id: true,
  createdAt: true,
}).extend({
  firstName: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .min(
      USER_VALIDATION.FIRST_NAME.MIN,
      `Минимальное количество символов - ${USER_VALIDATION.FIRST_NAME.MIN}`
    )
    .max(
      USER_VALIDATION.FIRST_NAME.MAX,
      `Максимальное количество символов - ${USER_VALIDATION.FIRST_NAME.MAX}`
    ),
  lastName: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .min(
      USER_VALIDATION.LAST_NAME.MIN,
      `Минимальное количество символов - ${USER_VALIDATION.LAST_NAME.MIN}`
    )
    .max(
      USER_VALIDATION.LAST_NAME.MAX,
      `Максимальное количество символов - ${USER_VALIDATION.LAST_NAME.MAX}`
    ),
  email: z.email('Неверный формат. Правильный формат: user@example.com'),
});

export type UserPayload = z.infer<typeof UserPayloadSchema>;
