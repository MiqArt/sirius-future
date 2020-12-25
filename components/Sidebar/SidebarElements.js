import styled from '@emotion/styled';

export const SidebarContainer = styled.nav`
  width: 210px;
  background-color: #fff;
`

export const SidebarLogo = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  background-image: url("logo.png");
  background-repeat: no-repeat;
  background-position: center;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0px;
    top: 129px;
    background: rgba(0, 0, 0, 0.1);
  };
  &:after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    top: 30px;
    right: 20px;
    background-image: url('icons/hide.svg');
  }
`

export const SidebarList = styled.ul`
  list-style: none;
  width: 100%;
`

export const SidebarListItem = styled.li`
  position: relative;
  height: 45px;
  color: rgba(0, 0, 0, 0.5);
  transition: color .3s ease;
  background-color: #fff;
  &:hover {
    background-color: #edf0f582;
  }
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 3px;
    left: 0;
    background-image: url('icons/line.png');
    background-repeat: no-repeat;
    opacity: 0;
  }
`

export const SidebarListItemLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 56px;
  font-size: 13px;
  background-image: url(${props => props.image});
  cursor: pointer;
  &:before {
    content: "";
    mask: url('icons/${props => props.fileName}.svg');
    mask-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    bottom: 0;
    left: 30px;
    margin: auto 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color .3s ease;
  }
`