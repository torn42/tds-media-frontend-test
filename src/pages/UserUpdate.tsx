import { useNavigate, useParams } from 'react-router';
import { UserForm } from '../components/users/UserForm';
import { useUsers } from '../hooks/useUsers';
import type { User, UserPayload } from '../types/user';
import { useEffect, useState } from 'react';

export const UserUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { updateUser, getUserById } = useUsers();
  const [initialData, setInitialData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const user = await getUserById(id);
        setInitialData(user);
      } catch (err) {
        console.error(err);
        setError('Пользователь не найден');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id, getUserById]);

  const handleCancel = () => navigate('/');

  const handleUpdate = async (data: UserPayload) => {
    if (!id) return;
    try {
      setError(null);
      await updateUser(id, data);
      navigate('/');
    } catch {
      setError('Не удалось обновить данные. Попробуйте позже.');
    }
  };

  if (isLoading)
    return <div className="p-6">Загрузка данных пользователя...</div>;

  if (error && !initialData)
    return (
      <div className="py-2 px-4 bg-red-200 border-2 border-red-400 rounded-md">
        {error}
      </div>
    );

  return (
    <div>
      <span>Страница обновления</span>
      {error && (
        <div className="py-2 px-4 bg-red-200 border-2 border-red-400 rounded-md">
          {error}
        </div>
      )}
      <UserForm
        onSubmit={handleUpdate}
        onCancel={handleCancel}
        defaultValues={initialData ?? undefined}
        submitText="Сохранить"
      />
    </div>
  );
};
