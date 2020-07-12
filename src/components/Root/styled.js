import { FaHistory } from 'react-icons/fa';
import styled from 'styled-components';

export const CalculatorBody = styled.div`
  background: ${(props) => props.theme.eerieBlack};
  box-sizing: border-box;
  height: ${(props) =>
    props.expanded
      ? props.theme.fullCalculatorHeight
      : props.theme.compactCalculatorHeight}px;
  width: ${(props) =>
    props.expanded
      ? props.theme.fullCalculatorWidth
      : props.theme.compactCalculatorWidth}px;
`;

export const CalculatorButtonContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${(props) =>
    props.expanded ? 'repeat(10, 10%)' : 'repeat(4, 25%)'};
  height: 75%;
`;

export const CalculatorDisplay = styled.div`
  box-sizing: border-box;
  height: 25%;
  color: white;
`;

export const DisplayInput = styled.div`
  box-sizing: border-box;
  height: 65%;
  font-size: ${(props) => (props.expanded ? '3' : '5')}rem;
  text-align: right;
  overflow-x: auto;
  padding-right: 0.5rem;
  padding-top: ${(props) => (props.expanded ? '0.25' : '0.75')}rem;

  &::-webkit-scrollbar {
    background: transparent;
  }
`;

export const DisplayInputHistory = styled.div`
  box-sizing: border-box;
  height: 35%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.5rem;
`;

export const HistoryIcon = styled(FaHistory).attrs((props) => ({
  size: props.theme.iconSize,
}))`
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
