import styled from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  background: ${(props) =>
    props.type === 'input'
      ? props.theme.darkLiver
      : props.type === 'primaryFunction'
      ? props.theme.vividGamboge
      : props.type === 'secondaryFunction'
      ? props.theme.lightGrey
      : props.theme.mineShaft};
  border: none;
  border-radius: 50px;
  color: ${(props) => (props.type === 'secondaryFunction' ? 'black' : 'white')};
  cursor: pointer;

  font-size: ${(props) =>
    props.expanded
      ? props.type === 'tertiaryFunction'
        ? props.theme.tertiaryButtonFontSize
        : props.theme.expandedFontSize
      : props.theme.compactFontSize}px;
  height: 90%;
  outline: none;
  width: ${(props) => (props.span !== 1 ? '95%' : '90%')};
  padding-left: ${(props) =>
    props.span !== 1 && props.theme.zeroButtonPadding}px;
  padding-top: ${(props) => props.expanded && 0.3}rem;
  display: flex;
  justify-content: ${(props) => (props.span !== 1 ? 'flex-start' : 'center')};
`;

export const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  grid-column-start: span ${(props) => props.span};

  .katex {
    font-size: 1em;
    font-family: 'Arimo', sans-serif;
  }
`;
