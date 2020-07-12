import React from 'react';

import { HistoryString, HistoryValue, Wrapper } from './styled';

const HistoryItem = ({
  handleClick: pushClick,
  handleVisibility,
  historyItem: { historyString, value },
}) => {
  const handleClick = () => {
    pushClick(historyString, value.replace(/,/g, ''));
    handleVisibility(false);
  };

  return (
    <Wrapper onClick={handleClick}>
      <HistoryString>{historyString}</HistoryString>
      <HistoryValue>{value}</HistoryValue>
    </Wrapper>
  );
};

export default HistoryItem;
