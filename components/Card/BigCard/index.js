import {
  BigCardContainer,
  CardTitle,
  CardTitleText,
  CardTitleValue,
  BigCardDescription,
} from '../CardElements';

const BigCard = ({ icon }) => {
  return (
    <BigCardContainer>
      <CardTitle icon={icon} iconColor="#000000">
        <CardTitleText color="rgba(0, 0, 0, 0.5)">Количество учеников:</CardTitleText>
        <CardTitleValue>250</CardTitleValue>
      </CardTitle>
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
