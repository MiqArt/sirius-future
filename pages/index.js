import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Chart from '../components/Chart';
import BigCard from '../components/Card/BigCard';

export default function Home() {

  const HomeContainer = styled.main`
    background-color: #F1F4F8;
    padding: 30px;
    width: calc(100% - 210px);
  `;

  const HomeContent = styled.div`
    display: flex;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <HomeContainer>
      <Head>
        <title>Sirius Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <HomeContent>
        <Chart name="yandex"/>
        <Chart name="paypal"/>
        <BigCard />
      </HomeContent>

    </HomeContainer>
  )
}
