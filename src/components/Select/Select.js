import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper tabIndex="0">
      <span>{displayedValue}</span>
      <Chevron />
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: ${COLORS.black};
  }

  select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const Chevron = styled(Icon).attrs({
  id: 'chevron-down',
  size: 26,
  strokeWidth: 2,
})`
  display: inline-block;
  margin-left: 24px;
`;

export default Select;
