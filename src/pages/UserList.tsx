import { useEffect } from 'react';
import { PlusIcon } from '../assets/icons/PlusIcon';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { useUsers } from '../hooks/useUsers';
import { UserTable } from '../components/users/UserTable';
import { NavLink } from 'react-router';

export const UserList = () => {
  const { users, getUsers, isLoading, error } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isLoading)
    return <div className="py-6 text-xl">Загрузка списка пользователей.</div>;

  if (error)
    return (
      <div className="py-2 px-4 bg-red-200 border-2 border-red-400 rounded-md">
        {error}
      </div>
    );

  return (
    <div className="mx-auto h-full">
      <PageHeader title="All Users" count={users.length}>
        <Button as={NavLink} to="/create" className="text-xs md:text-sm">
          <PlusIcon className="w-4 h-4" />
          <span>Добавить нового пользователя</span>
        </Button>
      </PageHeader>
      <UserTable users={users} />
    </div>
  );
};
