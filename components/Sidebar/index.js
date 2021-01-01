import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  SidebarContainer,
  SidebarLogo,
  SidebarMobileHeader,
  SidebarMobileHeaderBtn,
  MobileHeaderHamburger,
  SidebarList,
  SidebarListItem,
  SidebarListItemLink
} from './SidebarElements';

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

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = useRouter().pathname;

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if(!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <SidebarContainer className={isMenuOpen ? "openMenu" : ""}>
      <SidebarLogo />
      <SidebarMobileHeader>
        <SidebarMobileHeaderBtn onClick={menuToggle}>
          <MobileHeaderHamburger />
        </SidebarMobileHeaderBtn>
      </SidebarMobileHeader>
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
