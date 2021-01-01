import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/Header';
import ChartComponent from '../components/Chart';
import BigCard from '../components/Card/BigCard';
import SmallCard from '../components/Card/SmallCard';
import SmallCardBtn from '../components/Card/SmallCard/SmallCardBtn';

export default function Home() {

  const HomeContainer = styled.main`
    background-color: #F1F4F8;
    padding: 30px;
    width: calc(100% - 210px);
    @media screen and (max-width: 668px) {
      padding-top: 110px;
      width: 100%;
    };
  `;

  const HomeContent = styled.div`
    display: flex;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1250px) {
      flex-wrap: nowrap;
      flex-direction: column;
    };
  `;

  const CardsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const TwoCardsWrapper = styled.div`
    width: calc(25% - 15px);
    &:nth-of-type(2) {
      @media screen and (max-width: 861px) {
        margin-top: 20px;
      };
    };
    @media screen and (max-width: 1250px) {
      width: calc(50% - 10px);
    };
    @media screen and (max-width: 861px) {
      width: 100%;
    };
  `;



  return (
    <HomeContainer>
      <Head>
        <title>Sirius Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <HomeContent>
        <ChartComponent name="yandex" />
        <ChartComponent name="paypal" />
        <CardsWrapper>
          <BigCard icon="users" />
          <TwoCardsWrapper>
            <SmallCard icon={'ruble'} text={'Должников'} value={'12'} additionalValue={'(1 850,5 руб)'} />
            <SmallCard icon={'wallet'} text={'К оплате сегодня'} value={'121'} additionalValue={false} />
          </TwoCardsWrapper>
          <TwoCardsWrapper>
            <SmallCard icon={'ticket'} text={'Без абонемента'} value={'30'} additionalValue={false} />
            <SmallCard icon={'wallet-arrow'} text={'К оплате завтра'} value={'32'} additionalValue={false} />
          </TwoCardsWrapper>
          <TwoCardsWrapper>
            <SmallCard icon={'book'} text={'Количество тренеров'} value={'250'} additionalValue={false} />
            <SmallCardBtn icon="file-edit" text="Получить выписку по зарплате тренеров" />
          </TwoCardsWrapper>
        </CardsWrapper>
      </HomeContent>

    </HomeContainer>
  )
}
