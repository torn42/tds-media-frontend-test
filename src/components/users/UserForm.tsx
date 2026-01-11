import { Controller, useForm } from 'react-hook-form';
import { UserPayloadSchema, type UserPayload } from '../../types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { TagInput } from '../ui/TagInput';
import { Button } from '../ui/Button';

interface UserFormProps {
  onSubmit: (data: UserPayload) => Promise<void>;
  onCancel?: () => void;
  defaultValues?: Partial<UserPayload>;
  submitText?: string;
}

export const UserForm = ({
  onSubmit,
  onCancel,
  defaultValues,
  submitText = 'Сохранить',
}: UserFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserPayload>({
    resolver: zodResolver(UserPayloadSchema),
    defaultValues: defaultValues || {
      firstName: '',
      lastName: '',
      email: '',
      skills: [],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <Input
        label="Имя"
        id="firstName"
        placeholder="Введите имя"
        {...register('firstName')}
        error={errors.firstName?.message}
      />

      <Input
        label="Фамилия"
        id="lastName"
        placeholder="Введите фамилию"
        {...register('lastName')}
        error={errors.lastName?.message}
      />

      <Input
        label="Email"
        id="email"
        placeholder="user@example.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Controller
        name="skills"
        control={control}
        render={({ field }) => (
          <TagInput
            label="Навыки"
            value={field.value || []}
            onChange={field.onChange}
            error={errors.skills?.message}
          />
        )}
      />

      <div className="flex items-center gap-4 pt-4">
        <Button
          type="button"
          disabled={isSubmitting}
          onClick={onCancel}
          variant="outlined"
        >
          Отмена
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Загрузка...' : submitText}
        </Button>
      </div>
    </form>
  );
};
