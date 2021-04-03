import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === 'large' ? 26 : 20;
  return (
    <Wrapper className={size} style={{ '--width': width + 'px' }}>
      <NativeInput placeholder={placeholder} />
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} strokeWidth={2} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --border-width: 2px;
  position: relative;
  border-bottom: var(--border-width) solid ${COLORS.black};
  font-size: ${18 / 16}rem;
  width: var(--width);
  color: ${COLORS.gray500};

  &.small {
    font-size: ${14 / 16}rem;
    --border-width: 1px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  position: relative;
  padding: 7px;
  padding-left: 44px;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  border: none;
  color: inherit;

  ${Wrapper}.small & {
    padding: 4px;
    padding-left: 30px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  pointer-events: none;
`;

export default IconInput;
