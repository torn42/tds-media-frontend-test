import type { NavItem } from '../../types/navigation';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  items: NavItem[];
}

export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <aside className="w-16 py-6 px-4 bg-white min-h-screen sticky top-0 shrink-0">
      <nav className="flex flex-col items-center gap-3">
        {items.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </nav>
    </aside>
  );
};
