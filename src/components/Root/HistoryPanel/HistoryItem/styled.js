import styled from 'styled-components';

export const HistoryString = styled.div`
  box-sizing: border-box;
  font-size: ${(props) => props.theme.historyStringFontSize}px;
  text-align: right;
`;

export const HistoryValue = styled.div`
  box-sizing: border-box;
  font-size: ${(props) => props.theme.historyValueFontSize}px;
  font-weight: 700;
  text-align: right;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 1rem;

  :hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;
