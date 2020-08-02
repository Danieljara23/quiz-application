import { css } from '@emotion/core';
import styled from '@emotion/styled';

const StyledImage = styled.img`
  ${({ width, height }) => css`
    width: ${width || '25px'};
    height: ${height || '25px'};
  `}
`;

interface Props {
  iconName: string;
  width: string;
  height: string;
  alt: string;
}
function SvgIcon({ iconName, width, height, alt }: Props): JSX.Element {
  return (
    <StyledImage
      width={width}
      height={height}
      src={`/images/icons/${iconName}.svg`}
      alt={alt}
    />
  );
}

export default SvgIcon;
