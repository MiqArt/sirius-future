import Users from '../../../public/icons/users.svg';
import {
  SmallCardContainer,
  CardTitle,
  CardTitleText,
  CardTitleValueWrapper,
  CardTitleValue,
  CardTitleAdditionalValue
} from '../CardElements';

const SmallCard = ({ icon, text, value, additionalValue }) => {
  return (
    <SmallCardContainer>
      <CardTitle icon={icon} iconColor="#000000">
        <CardTitleText color="rgba(0, 0, 0, 0.5)">{text}:</CardTitleText>
        <CardTitleValueWrapper>
          <CardTitleValue>{value}</CardTitleValue>
          {additionalValue && <CardTitleAdditionalValue>{additionalValue}</CardTitleAdditionalValue>}
        </CardTitleValueWrapper>
      </CardTitle>
    </SmallCardContainer>
  );
};

export default SmallCard;
