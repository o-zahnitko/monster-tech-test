import { GrClose } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

export const CloseIcon = styled(GrClose).attrs((props) => ({
  size: props.theme.iconSize,
}))`
  cursor: pointer;
`;

export const DeleteIcon = styled(MdDelete).attrs((props) => ({
  size: props.theme.iconSize,
}))`
  cursor: pointer;
`;

export const HistoryContainer = styled.div`
  height: 90%;
  overflow: hidden auto;
`;

export const HistoryTitleBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 10%;
`;

export const NoHistoryContainer = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.98);
  box-sizing: border-box;
  height: ${(props) =>
    props.visible
      ? props.expanded
        ? props.theme.fullCalculatorHeight
        : props.theme.compactCalculatorHeight
      : '0'}px;
  position: absolute;
  overflow: hidden;
  transition: height 0.7s;
  bottom: ${(props) => props.offsetTop}px;
  width: ${(props) =>
    props.expanded
      ? props.theme.fullCalculatorWidth
      : props.theme.compactCalculatorWidth}px;
`;
