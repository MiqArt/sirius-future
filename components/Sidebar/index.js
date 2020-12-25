import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  SidebarContainer,
  SidebarLogo,
  SidebarList,
  SidebarListItem,
  SidebarListItemLink
} from './SidebarElements';

const Sidebar = () => {
  const menuItems = [
    { text: 'Занятия', fileName: 'calendar', href: '/Empty1' },
    { text: 'Учащиеся', fileName: 'user', href: '/' },
    { text: 'Тренеры', fileName: 'book', href: '/Empty2' },
    { text: 'Финансы', fileName: 'ruble', href: '/Empty3' },
    { text: 'Абонементы', fileName: 'ticket', href: '/Empty4' },
    { text: 'Доступ в CRM', fileName: 'flag', href: '/Empty5' },
    { text: 'Рассылки', fileName: 'email', href: '/Empty6' },
    { text: 'Отчеты', fileName: 'chart-bar', href: '/Empty7' },
    { text: 'Настройки', fileName: 'settings', href: '/Empty8' }
  ];
  const pathname = useRouter().pathname;
  
  return (
    <SidebarContainer>
      <SidebarLogo />
      <SidebarList>
        {
          menuItems.map(({ text, fileName, href }, key) => {
            return (
              <SidebarListItem className={pathname === href ? 'activeRoute' : ''} key={`menu-link-${key}`}>
                <Link href={href}>
                  <SidebarListItemLink fileName={fileName}>{text}</SidebarListItemLink>
                </Link>
              </SidebarListItem>
            )
          })
        }
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
