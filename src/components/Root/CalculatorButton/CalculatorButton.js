import Latex from 'react-latex';
import React from 'react';

import { StyledButton, Wrapper } from './styled';

const CalculatorButton = ({ button, expanded, onClick: pushClick }) => {
  const handleClick = (value) => pushClick(value);

  return (
    <Wrapper span={button.span || 1}>
      <StyledButton
        expanded={expanded}
        onClick={() => handleClick(button.role)}
        span={button.span || 1}
        type={button.type}
      >
        {button.texRequired ? (
          <Latex
            display={false}
            maxSize={5}
            macros={{ '\\displayValue': button.displayValue }}
          >
            $$\\\displayValue$$
          </Latex>
        ) : (
          button.displayValue
        )}
      </StyledButton>
    </Wrapper>
  );
};

export default CalculatorButton;
