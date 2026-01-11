import { NavLink } from 'react-router';
import type { NavItem } from '../../types/navigation';
import { cn } from '../../utils/cn';

type SidebarItemProps = NavItem;

export const SidebarItem = ({ label, to, icon }: SidebarItemProps) => {
  return (
    <NavLink
      aria-label={label}
      to={to}
      className={({ isActive }) =>
        cn('group', isActive ? 'text-blue-600' : 'text-gray-600')
      }
    >
      {icon && (
        <span className={cn('w-6 h-6 hover:text-blue-600')}>{icon}</span>
      )}
    </NavLink>
  );
};
