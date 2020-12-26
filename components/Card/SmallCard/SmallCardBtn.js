import {
  SmallCardBtnContainer,
  CardTitle,
  CardTitleText
} from '../CardElements';

const SmallCardBtn = ({ icon, text }) => {
  return (
    <SmallCardBtnContainer>
      <CardTitle icon={icon} iconColor="#fff">
        <CardTitleText color="#fff">{text}</CardTitleText>
      </CardTitle>
    </SmallCardBtnContainer>
  );
};

export default SmallCardBtn;
