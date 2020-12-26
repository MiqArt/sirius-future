import styled from '@emotion/styled';
import Spinner from '../../public/spinner.svg';
import Head from 'next/head';

const ComingSoon = () => {

  const SpinnerWrapper = styled.div`
    height: 100vh;
    width: calc(100% - 210px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.4);
    user-select: none;
  `;

  const SpinnerText = styled.h3`
    margin-top: 15px;
    font-weight: bold;
  `;

  return (
    <SpinnerWrapper>
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner className="spinner" />
      <SpinnerText>Coming Soon...</SpinnerText>
    </SpinnerWrapper>
  );
};

export default ComingSoon;
