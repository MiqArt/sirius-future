import styled from '@emotion/styled';

export const ChartBtnGroup = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 10px;
`

export const ChartBtn = styled.button`
  font-size: 12px;
  line-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 14px 15px;
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &:nth-of-type(2) {
    margin: 0 10px;
  };
`

export const ChartContainer = styled.div`
  margin-bottom: 20px;
  width: calc(50% - 10px);
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
  `
export const ChartCanvasContainer = styled.div`
  position: relative;
  height: 315px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
`

export const ChartLogo = styled.img`
  position: absolute;
  user-select: none;
  right: 20px;
  top: 20px;
`

export const ChartTitle = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`

export const ChartTitleText = styled.span`
  font-size: 13px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
`

export const ChartTitleValue = styled.span`
  font-size: 26px;
  color: #000000;
  line-height: 33px;
  margin-right: 6px;
`

export const ChartTitleValueText = styled.span`
  font-size: 18px;
  color: #000000;
  line-height: 26px;
  margin-right: 8px;
`