import styled from '@emotion/styled';
import Spinner from '../../public/spinner.svg';
import Head from 'next/head';

const ComingSoon = () => {

  const SpinnerWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.5);
  `

  return (
    <SpinnerWrapper>
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner className="spinner" />
      <h2>Coming Soon!</h2>
    </SpinnerWrapper>
  );
};

export default ComingSoon;
