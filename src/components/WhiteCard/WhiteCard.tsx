import { ReactNode } from 'react';

import { css } from '@emotion/core';

const whiteCardCss = css`
  border-radius: 19px;
  background-color: white;
  width: 100%;
  padding: 20px;
`;

interface WhiteCardProps {
  children?: ReactNode;
  styles: any;
}
function WhiteCard({ children, styles }: WhiteCardProps): JSX.Element {
  return <div css={[whiteCardCss, styles]}>{children}</div>;
}

export default WhiteCard;
