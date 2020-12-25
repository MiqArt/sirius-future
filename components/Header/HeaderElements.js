import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 43px;
  margin-bottom: 30px;
`

export const HeaderSearch = styled.div`
  position: relative;
  max-width: 500px;
  width: 43%;
  height: 100%;
  background-color: #fff;
  border-radius: 67px;
  overflow: hidden;
  &:before {
    content: "";
    mask: url('icons/search.svg');
    mask-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    bottom: 0;
    left: 16.6px;
    margin: auto 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color .3s ease;
  }
  &:focus-within:before {
    background-color: rgba(0, 0, 0);
  }
`

export const HeaderSearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 0 7px 0 36px;
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.5);
  transition: color .2s ease;
  &:focus {
    color: black
  }
`

export const HeaderUser = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    left: 31px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const HeaderUserNot = styled.button`
  height: 100%;
  width: 16px;
  margin-right: 31px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const HeaderUserName = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`

export const HeaderUserAvatar = styled.img`
  width: 43px;
  height: 43px;
  user-select: none;
`