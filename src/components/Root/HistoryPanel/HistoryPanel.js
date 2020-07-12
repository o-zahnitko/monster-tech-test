import React from 'react';

import HistoryItem from './HistoryItem';
import {
  CloseIcon,
  DeleteIcon,
  HistoryContainer,
  HistoryTitleBar,
  NoHistoryContainer,
  Wrapper,
} from './styled';

const HistoryPanel = ({
  clearHistory,
  expanded,
  handleVisibility,
  history,
  itemClick,
  offsetTop,
  visible,
}) => {
  const handleClick = () => handleVisibility(false);

  const handleDeleteClick = () => {
    clearHistory();
    handleVisibility(false);
  };

  return (
    <Wrapper expanded={expanded} offsetTop={offsetTop} visible={visible}>
      <HistoryTitleBar>
        <CloseIcon onClick={handleClick} />
        <h2>History</h2>
        <DeleteIcon onClick={handleDeleteClick} />
      </HistoryTitleBar>
      <HistoryContainer>
        {history.length === 0 ? (
          <NoHistoryContainer>There is no history yet</NoHistoryContainer>
        ) : (
          history.map((item) => (
            <HistoryItem
              handleClick={itemClick}
              handleVisibility={handleVisibility}
              historyItem={item}
              key={item.id}
            />
          ))
        )}
      </HistoryContainer>
    </Wrapper>
  );
};

export default HistoryPanel;
