import styled from '@emotion/styled';

export const SidebarContainer = styled.nav`
  width: 210px;
  background-color: #fff;
  z-index: 1000;
  @media screen and (max-width: 668px) {
    position: fixed;
    width: 100%;
  };
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
  };
  @media screen and (max-width: 668px) {
    display: none;
  };
`

export const SidebarMobileHeader = styled.div`
  display: none;
  position: relative;
  height: 80px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  text-align: right;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:before {
    content: "";
    position: absolute;
    background-image: url("logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 80px;
    left: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  };
  @media screen and (max-width: 668px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  };
`

export const SidebarMobileHeaderBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  height: 20px;
  width: 30px;
  outline: none;
  cursor: pointer;
  &:before, &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    border-radius: 30px;
    background-color: rgb(127 127 127);
    left: 0;
    transition: transform .3s ease, top .2s ease, bottom .2s ease;
  }
  &:before {
    top: 0;
  };
  &:after {
    bottom: 0;
  };
`

export const MobileHeaderHamburger = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform .3s ease, opacity .3s ease;
`

export const SidebarList = styled.ul`
  list-style: none;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  transition: height .3s ease;
  @media screen and (max-width: 668px) {
    height: 0;
  };
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