import { useNavigate } from 'react-router';
import { UserForm } from '../components/users/UserForm';
import { useUsers } from '../hooks/useUsers';
import type { UserPayload } from '../types/user';
import { useState } from 'react';

export const UserCreate = () => {
  const navigate = useNavigate();
  const { createUser } = useUsers();
  const [error, setError] = useState<string | null>(null);

  const handleCancel = () => navigate('/');

  const handleCreate = async (data: UserPayload) => {
    try {
      await createUser(data);
      navigate('/');
    } catch {
      setError('Не удалось создать пользователя. Попробуйте позже.');
    }
  };

  return (
    <div>
      <span>Страница создания</span>
      {error && (
        <div className="py-2 px-4 bg-red-200 border-2 border-red-400 rounded-md">
          {error}
        </div>
      )}
      <UserForm
        onSubmit={handleCreate}
        onCancel={handleCancel}
        submitText="Создать"
      />
    </div>
  );
};
