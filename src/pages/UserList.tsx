import { useEffect } from 'react';
import { PlusIcon } from '../assets/icons/PlusIcon';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { useUsers } from '../hooks/useUsers';
import { UserTable } from '../components/users/UserTable';
import { NavLink } from 'react-router';

export const UserList = () => {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

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
