import styled from '@emotion/styled';
import Users from '../../../public/icons/users.svg';

const BigCard = () => {

  const BigCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 230px;
    width: 277px;
    padding: 20px 20px 30px 20px;
    background-color: #fff;
  `

  const BigCardTitle = styled.div`
    position: relative;
    padding-left: 44px;
    margin-bottom: 17px;
  `

  const BigCardTitleText = styled.span`
    font-size: 13px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.5);
  `

  const BigCardTitleValue = styled.span`
    display: block;
    font-size: 26px;
    line-height: 38px;
  `

  const BigCardTitleIcon = styled.div`
    position: absolute;
    width: 29px;
    height: 23px;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    &:only-child {
      width: 20px;
      height: 20px;
    }
  `

  const BigCardDescription = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 10px;
    & > span {
      color: rgba(0, 0, 0, 0.5);
      padding-right: 5px;
      background: #fff;
      z-index: 2;
    };
    & > b {
      color: #000000;
      padding-left: 5px;
      background: #fff;
      z-index: 2;
    };
    &:before {
      content: "";
      position: absolute;
      top: -50%;
      border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
      color: black;
      width: 100%;
      height: 100%;
    };
  `

  return (
    <BigCardContainer>
      <BigCardTitle>
        <BigCardTitleText>Количество учеников:</BigCardTitleText>
        <BigCardTitleValue>250</BigCardTitleValue>
        <BigCardTitleIcon>
          <Users />
        </BigCardTitleIcon>
      </BigCardTitle>
      <BigCardDescription>
        <span>За последнюю неделю</span>
        <b>25</b>
      </BigCardDescription>
      <BigCardDescription>
        <span>Без абонемента</span>
        <b>150</b>
      </BigCardDescription>
      <BigCardDescription>
        <span>Неактивные</span>
        <b>25</b>
      </BigCardDescription>
      <BigCardDescription>
        <span>Добавлено за день</span>
        <b>50</b>
      </BigCardDescription>
    </BigCardContainer>
  );
};

export default BigCard;
