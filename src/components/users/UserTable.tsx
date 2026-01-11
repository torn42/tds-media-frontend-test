import { NavLink } from 'react-router';
import { DeleteIcon } from '../../assets/icons/DeleteIcon';
import { EditIcon } from '../../assets/icons/EditIcon';
import type { User } from '../../types/user';
import { Button } from '../ui/Button';
import { Table, TBody, TCell, THead, THeaderCell, TRow } from '../ui/Table';
import { useUsers } from '../../hooks/useUsers';

interface UserTableProps {
  users: User[];
}

export const UserTable = ({ users }: UserTableProps) => {
  const { deleteUser } = useUsers();
  return (
    <Table>
      <THead>
        <TRow className="border-0">
          <THeaderCell className="w-16">ID</THeaderCell>
          <THeaderCell className="w-40">Имя</THeaderCell>
          <THeaderCell className="w-48">Фамилия</THeaderCell>
          <THeaderCell className="w-40">Email</THeaderCell>
          <THeaderCell className="w-64">Навыки</THeaderCell>
          <THeaderCell className="w-44">Дата регистрации</THeaderCell>
          <THeaderCell className="w-32 text-center">Действия</THeaderCell>
        </TRow>
      </THead>
      <TBody>
        {users.map((user) => (
          <TRow key={user.id}>
            <TCell>
              <span>{user.id}</span>
            </TCell>
            <TCell>
              <span>{user.firstName}</span>
            </TCell>
            <TCell>
              <span>{user.lastName}</span>
            </TCell>
            <TCell>
              <span>{user.email}</span>
            </TCell>
            <TCell>
              {user.skills.length === 0 ? (
                <span>Навыки не указаны</span>
              ) : (
                <span>{user.skills.join(', ')}</span>
              )}
            </TCell>
            <TCell>
              <span>{user.createdAt.toLocaleDateString()}</span>
            </TCell>
            <TCell className="flex gap-2">
              <Button
                as={NavLink}
                to={`/update/${user.id}`}
                variant="outlined"
                className="py-2 w-1/2"
              >
                <EditIcon />
                Изменить
              </Button>
              <Button
                onClick={() => deleteUser(user.id)}
                className="py-2 bg-red-500 hover:bg-red-600 w-1/2"
              >
                <DeleteIcon className="w-5 h-5" />
                Удалить
              </Button>
            </TCell>
          </TRow>
        ))}
      </TBody>
    </Table>
  );
};
