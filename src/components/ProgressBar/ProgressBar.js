/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
  },
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];
  let Component;

  if (size === 'large') {
    Component = LargeWrapper;
  } else if (size === 'medium') {
    Component = MediumWrapper;
  } else if (size === 'small') {
    Component = SmallWrapper;
  } else {
    throw new Error('Unknown size');
  }

  return (
    <Component style={style}>
      <InnerBar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
      >
        <VisuallyHidden>
          ProgressBar: value is {value} percent
        </VisuallyHidden>
      </InnerBar>
    </Component>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  min-height: 100%;
  width: ${(props) => (props.value > 100 ? 100 : props.value)}%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) =>
    props.value >= 99 ? '4px' : '0px'};
  border-bottom-right-radius: ${(props) =>
    props.value >= 99 ? '4px' : '0px'};
`;

const LargeWrapper = styled(Wrapper)`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
`;

const MediumWrapper = styled(Wrapper)`
  height: var(--height);
  border-radius: var(--borderRadius);
`;

const SmallWrapper = styled(Wrapper)`
  height: var(--height);
  border-radius: var(--borderRadius);
`;

export default ProgressBar;
