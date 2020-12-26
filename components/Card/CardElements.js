import styled from '@emotion/styled';

export const BigCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: calc(25% - 15px);
  padding: 20px 20px 30px 20px;
  background-color: #fff;
  @media screen and (max-width: 1250px) {
    width: calc(50% - 10px);
  };
  @media screen and (max-width: 861px) {
    width: 100%;
  };
`

export const SmallCardContainer = styled.div`
  height: 105px;
  width: 100%;
  padding: 24px 20px;
  background-color: #fff;
  margin-bottom: 20px;
`

export const SmallCardBtnContainer = styled.button`
  height: 105px;
  width: 100%;
  padding: 33px 20px 34px 20px;
  background-color: #2E71F3;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color .3s ease;
  &:hover {
    background-color: #105df3;
  };
`

export const CardTitle = styled.div`
  position: relative;
  padding-left: 44px;
  margin-bottom: 17px;
  text-align: left;
  &:before {
    content: "";
    position: absolute;
    mask: url('icons/${props => props.icon}.svg');
    mask-repeat: no-repeat;
    width: 34px;
    height: 34px;
    mask-size: contain;
    mask-position: center;
    top: 0;
    background-color: ${props => props.iconColor};
    left: 0;
    bottom: 0;
    margin: auto 0;
}
`

export const CardTitleText = styled.span`
  font-size: 13px;
  line-height: 19px;
  color: ${props => props.color};
`

export const CardTitleValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export const CardTitleValue = styled.span`
  display: block;
  font-size: 26px;
  line-height: 38px;
  position: relative;
`
export const CardTitleAdditionalValue = styled.span`
  display: block;
  position: relative;
  font-size: 18px;
  margin-left: 8px;
`

export const BigCardDescription = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 10px;
  & > span {
    color: rgba(0, 0, 0, 0.5);
    padding-right: 10px;
    background: #fff;
    z-index: 2;
  };
  & > b {
    color: #000000;
    padding-left: 10px;
    background: #fff;
    z-index: 2;
  };
  &:before {
    content: "................................................................................................";
    position: absolute;
    left: 0;
    font-size: 20px;
    line-height: 50%;
    width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0.2);
    overflow: hidden;
};
`