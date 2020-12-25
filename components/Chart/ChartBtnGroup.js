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
  &:nth-child(2) {
    margin: 0 10px;
  };
`
