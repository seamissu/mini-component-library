import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--fontSize': 14 / 16 + 'rem',
    '--height': 24 + 'px',
    '--paddingLeft': 24 + 'px',
    '--bottomBorder': 1 + 'px',
    svgSize: 16,
    strokeWidth: 1,
  },
  large: {
    '--fontSize': 18 / 16 + 'rem',
    '--height': 36 + 'px',
    '--paddingLeft': 36 + 'px',
    '--bottomBorder': 2 + 'px',
    svgSize: 24,
    strokeWidth: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputSize = SIZES[size];

  return (
    <>
      <label htmlFor="search">
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>

      <Wrapper width={width} style={inputSize}>
        <NativeInput
          placeholder={placeholder}
          id="search"
          style={inputSize}
        />
        <IconWrapper size={inputSize.svgSize}>
          <Icon
            id={icon}
            size={inputSize.svgSize}
            strokeWidth={inputSize.strokeWidth}
          />
        </IconWrapper>
        <BackBoard width={width} style={inputSize}></BackBoard>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  isolation: isolate;
  width: ${(props) => props.width}px;
  padding-left: var(--paddingLeft);
  position: relative;
  height: var(--height);
  border-bottom: var(--bottomBorder) solid ${COLORS.black};
`;

const IconWrapper = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border: 0 solid;
  outline: 0;
  font-weight: 700;
  font-size: var(--fontSize);
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: var(--fontSize);
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const BackBoard = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: ${(props) => props.width}px;
  height: var(--height);

  &:focus {
    outline-offset: 2px;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${IconWrapper}:focus + & {
    outline-offset: 2px;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeInput}:focus ~ & {
    outline-offset: 2px;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default IconInput;
