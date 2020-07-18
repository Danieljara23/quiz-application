import { css } from "@emotion/core";

const whiteCardCss = css`
  border-radius: 19px;
  background-color: white;
  width: 100%;
  padding: 20px;
`;

function WhiteCard({children, styles}){
  return(
    <div css={[whiteCardCss, styles]}>
      {children}
    </div>
  )
}

export default WhiteCard;