import Notifications from '../../public/icons/notifications.svg';
import {
  HeaderContainer,
  HeaderSearch,
  HeaderSearchInput,
  HeaderUser,
  HeaderUserNot,
  HeaderUserName,
  HeaderUserAvatar
} from './HeaderElements';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSearch>
        <HeaderSearchInput placeholder="Поиск клиента" />
      </HeaderSearch>
      <HeaderUser>
        <HeaderUserNot>
          <Notifications/>
        </HeaderUserNot>
        <HeaderUserName>Alexander Gerasimuk</HeaderUserName>
        <HeaderUserAvatar src="user-avatar.png" alt="avatar"/>
      </HeaderUser>
    </HeaderContainer>
  );
};

export default Header;
