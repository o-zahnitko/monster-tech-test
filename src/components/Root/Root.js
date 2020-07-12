import React, { useRef, useState } from 'react';

import * as theme from '#config/theme';
import buttonOrder from '#data/buttonOrder';
import useGetDimensions from '#helpers/useGetDimensions';
import useIdGenerator from '#helpers/useIdGenerator';

import CalculatorButton from './CalculatorButton';
import HistoryPanel from './HistoryPanel';
import {
  CalculatorBody,
  CalculatorButtonContainer,
  CalculatorDisplay,
  DisplayInput,
  DisplayInputHistory,
  HistoryIcon,
  Wrapper,
} from './styled';

const Root = () => {
  const [firstOperand, setFirstOperand] = useState(null);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState(null);
  const [inputString, setInputString] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const generateId = useIdGenerator();

  const calculatorBodyRef = useRef();

  const { expanded, offsetTop } = useGetDimensions({
    minWidth: theme.fullCalculatorWidth,
    elementReference: calculatorBodyRef,
  });

  const clearHistory = () => setHistory(() => []);

  const handleBasicOperation = (role) => {
    const operatorLookup = {
      addition: '+',
      division: '÷',
      multiplication: '×',
      subtraction: '-',
    };
    if (!firstOperand && !input && !operator && !result) {
      setFirstOperand(() => '0');
      setOperator(() => role);
      setInputString(() => `0${operatorLookup[role]}`);
    } else if (!firstOperand && !input && !operator && result) {
      setFirstOperand(() => result);
      setInputString(() => `${result}${operatorLookup[role]}`);
      setOperator(() => role);
    } else if (!firstOperand && input && !operator) {
      setFirstOperand(() => input);
      setInput(() => null);
      setInputString(() => `${input}${operatorLookup[role]}`);
      setOperator(() => role);
      setResult(() => null);
    } else if (firstOperand && input && operator) {
      const calculationResult = handleCalculation(
        firstOperand,
        input,
        operator
      );
      if (calculationResult) {
        setFirstOperand(() => calculationResult);
        setInput(() => null);
        setInputString(
          (inputString) => `${inputString}${input}${operatorLookup[role]}`
        );
        setOperator(() => role);
        setResult(() => calculationResult);
      } else {
        handleClear('Cannot divide by zero.');
      }
    } else if (firstOperand && !input && operator) {
      if (operator !== role) {
        setOperator(() => role);
        setInputString(
          (inputString) => `${inputString.slice(0, -1)}${operatorLookup[role]}`
        );
      }
    }
  };

  const handleCalculation = (firstValue, secondValue, operation) => {
    let precision =
      (firstValue.split('.')[1] ? firstValue.split('.')[1].length : 0) +
      (secondValue.split('.')[1] ? secondValue.split('.')[1].length : 0);
    let calculationResult;
    if (operation === 'addition') {
      calculationResult = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operation === 'division') {
      calculationResult = parseFloat(firstValue) / parseFloat(secondValue);
    } else if (operation === 'multiplication') {
      calculationResult = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (operation === 'subtraction') {
      calculationResult = parseFloat(firstValue) - parseFloat(secondValue);
    }

    return calculationResult === Infinity || Number.isNaN(calculationResult)
      ? null
      : calculationResult.toFixed(precision).toString();
  };

  const handleClear = (message = null) => {
    setFirstOperand(() => null);
    setInput(() => null);
    setOperator(() => null);
    setResult(() => null);
    setInputString(() => message);
  };

  const handleClick = (role) => {
    if (
      role === '.' ||
      role === '0' ||
      role === '1' ||
      role === '2' ||
      role === '3' ||
      role === '4' ||
      role === '5' ||
      role === '6' ||
      role === '7' ||
      role === '8' ||
      role === '9'
    ) {
      if (!firstOperand && !input && !operator && !result) {
        setResult(() => null);
        setInputString(() => null);
      }
      updateInput(role);
    } else if (
      role === 'addition' ||
      role === 'division' ||
      role === 'multiplication' ||
      role === 'subtraction'
    ) {
      handleBasicOperation(role);
    } else if (role === 'clear') {
      handleClear();
    } else if (role === 'equals') {
      handleEquals();
    } else if (role === 'negate') {
      handleNegation();
    } else if (role === 'percentage') {
      handlePercentage();
    }
  };

  const handleEquals = () => {
    if (!firstOperand && !input && !operator) {
      setInputString(() => '0=');
      setResult(() => '0');
      setHistory((history) => [
        {
          historyString: '0=',
          id: generateId.newId('historyItem'),
          value: '0',
        },
        ...history,
      ]);
    } else if (!firstOperand && input && !operator) {
      setInput(() => null);
      setInputString(() => `${parseFloat(input)}=`);
      setResult(() => `${parseFloat(input)}`);
      setHistory((history) => [
        {
          historyString: `${parseFloat(input)}=`,
          id: generateId.newId('historyItem'),
          value: `${parseFloat(input)}`.replace(
            /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
            ','
          ),
        },
        ...history,
      ]);
    } else if (firstOperand && !input && operator) {
      const calculationResult = handleCalculation(
        firstOperand,
        firstOperand,
        operator
      );
      if (calculationResult) {
        setFirstOperand(() => null);
        setInputString((inputString) => `${inputString}${firstOperand}=`);
        setOperator(() => null);
        setResult(() => calculationResult);
        setHistory((history) => [
          {
            historyString: `${inputString}${parseFloat(firstOperand)}=`,
            id: generateId.newId('historyItem'),
            value: `${parseFloat(calculationResult)}`.replace(
              /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
              ','
            ),
          },
          ...history,
        ]);
      } else {
        handleClear('Cannot divide by zero.');
      }
    } else if (firstOperand && input && operator) {
      const calculationResult = handleCalculation(
        firstOperand,
        input,
        operator
      );
      if (calculationResult) {
        setFirstOperand(() => null);
        setInput(() => null);
        setInputString((inputString) => `${inputString}${input}=`);
        setOperator(() => null);
        setResult(() => calculationResult);
        setHistory((history) => [
          {
            historyString: `${inputString}${parseFloat(input)}=`,
            id: generateId.newId('historyItem'),
            value: `${parseFloat(calculationResult)}`.replace(
              /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
              ','
            ),
          },
          ...history,
        ]);
      } else {
        handleClear('Cannot divide by zero.');
      }
    }
  };

  const handleHistoryIconClick = () =>
    showHistory ? handleHistoryPanel(false) : handleHistoryPanel(true);

  const handleHistoryPanel = (openState) => setShowHistory(() => openState);

  const historyItemClick = (inputString, result) => {
    setInputString(() => inputString);
    setResult(() => result);
  };

  const handleNegation = () => {
    if (input) {
      setInput(() => (-1 * parseFloat(input)).toString());
    } else if (!input && result) {
      setInput(() => (-1 * parseFloat(result)).toString());
    } else if (firstOperand && !input) {
      setInput(() => (-1 * parseFloat(firstOperand)).toString());
    }
  };

  const handlePercentage = () => {
    if (input) {
      setInput(() => ((parseFloat(input / 100) * 100) / 100).toString());
    } else if (!input && result) {
      setInput(() => ((parseFloat(result / 100) * 100) / 100).toString());
    }
  };

  const updateInput = (value) => {
    if (value === '0') {
      if (!input) {
        setInput(() => '0');
      } else if (input !== '0') {
        setInput((input) => `${input}${value}`);
      }
      return;
    }
    if (value === '.') {
      if (!input) {
        setInput(() => '0.');
      } else if (!input.includes('.')) {
        setInput((input) => `${input}${value}`);
      }
      return;
    }
    setInput((input) => (input ? `${input}${value}` : value));
  };

  return (
    <Wrapper>
      <CalculatorBody expanded={expanded} ref={calculatorBodyRef}>
        <CalculatorDisplay>
          <DisplayInputHistory>
            <>
              <HistoryIcon onClick={handleHistoryIconClick} />
              {inputString}
            </>
          </DisplayInputHistory>
          <DisplayInput expanded={expanded}>
            {(input && input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')) ||
              (result &&
                result.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')) ||
              (firstOperand &&
                firstOperand.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')) ||
              0}
          </DisplayInput>
        </CalculatorDisplay>
        <CalculatorButtonContainer expanded={expanded}>
          {buttonOrder
            .filter((button) => (expanded ? button : button.compact === true))
            .map((button) => (
              <CalculatorButton
                button={button}
                expanded={expanded}
                key={button.displayValue}
                onClick={handleClick}
              />
            ))}
        </CalculatorButtonContainer>
      </CalculatorBody>
      <HistoryPanel
        clearHistory={clearHistory}
        expanded={expanded}
        history={history}
        visible={showHistory}
        handleVisibility={handleHistoryPanel}
        itemClick={historyItemClick}
        offsetTop={offsetTop}
        bottom={offsetTop}
      />
    </Wrapper>
  );
};

export default Root;
