import styled from '@emotion/styled';
import {
  ChartBtnGroup,
  ChartBtn,
} from './ChartBtnGroup';

const Chart = ({ name }) => {
  const ChartContainer = styled.div`
  margin-bottom: 20px;
  `
  const ChartCanvasContainer = styled.div`
    position: relative;
    height: 315px;
    width: 575px;
    background-color: #fff;
    padding: 20px;
  `

  const ChartLogo = styled.img`
    position: absolute;
    right: 20px;
    top: 20px;
  `

  return (
    <ChartContainer>
      <ChartBtnGroup>
        <ChartBtn className="activeChartBtn">День</ChartBtn>
        <ChartBtn>Неделя</ChartBtn>
        <ChartBtn>Месяц</ChartBtn>
      </ChartBtnGroup>
      <ChartCanvasContainer>
        <ChartLogo src={`${name}.png`}/>
      </ChartCanvasContainer>
    </ChartContainer>
  );
};

export default Chart;
