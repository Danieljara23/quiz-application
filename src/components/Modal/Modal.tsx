import React from 'react';
import { css } from '@emotion/core';
import ModalPortal from './ModalPortal';
import styled from '@emotion/styled';

interface Props {
  open: boolean;
  children: React.ReactNode;
}

const showCss = css`
  opacity: 1;
  pointer-events: auto;
`;

const ModalStyled = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 10;
  ${({ open }: any) => open && showCss};
`;

function Modal({ open, children }: Props): JSX.Element {
  console.log(open);
  return (
    <ModalPortal>
      <ModalStyled open={open}>{children}</ModalStyled>
    </ModalPortal>
  );
}

export default Modal;
