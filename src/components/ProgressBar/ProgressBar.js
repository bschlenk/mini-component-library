/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      className={size}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar width={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  height: 8px;
  background: ${COLORS.transparentGray15};

  &.medium {
    height: 12px;
  }

  &.large {
    border-radius: 8px;
    height: 24px;
    padding: 4px;
  }
`;

const Bar = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: 100%;
  clip-path: inset(0 ${(p) => 100 - p.width}% 0 0);

  ${Wrapper}.large & {
    border-radius: 4px;
  }
`;

export default ProgressBar;
