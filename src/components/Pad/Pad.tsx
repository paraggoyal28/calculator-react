import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { Digit, Operator } from '../../lib/types';

interface PadProps {
    onDigitButtonClick: (digit: Digit) => void
    onPointButtonClick: () => void
    onOperatorButtonClick: (operator: Operator) => void
    onChangeSignButtonClick: () => void
    onEqualButtonClick: () => void
    onAllClearButtonClick: () => void
    onClearEntryButtonClick: () => void
    onMemoryRecallButtonClick: () => void
    onMemoryClearButtonClick: () => void
    onMemoryPlusButtonClick: () => void
    onMemoryMinusButtonClick: () => void
}

const StyledPad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
`;

