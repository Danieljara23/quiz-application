import { css } from '@emotion/core';
import styled from '@emotion/styled';
import WhiteCard from '../../WhiteCard';
import SvgIcon from '../../SvgIcon';

const finalResultContainerCss = css`
  width 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const whiteCardCss = css`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 110px);
  grid-column-gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width 1px;
    height: 90px;
    background-color: #C9C9C9;
    top: 20px;
    left: 50%;
  }
`;

const resultsContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const descriptionCss = css`
  color: #3a3a3a;
  font-size: 12px;
  font-weight: bold;
`;

const ResultValue = styled.p`
  font-size: 29px;
  margin: 0;
  ${({ correct }) => css`
    color: ${correct ? '#00A156' : '#D9000F'};
  `}
`;

const buttonCss = css`
  background-color: rgba(48, 48, 48, 0.23);
  border: none;
  box-shadow: none;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.16);
  border-radius: 33px;
  margin-top: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
`;

function getFinalResults(userAnswers) {
  return userAnswers.reduce((obj, item) => {
    if (!obj['rigths']) obj['rigths'] = 0;
    if (!obj['wrongs']) obj['wrongs'] = 0;
    if (item.correct) {
      obj.rigths++;
    } else {
      obj.wrongs++;
    }
    return obj;
  }, {});
}

interface FinalResultProps {
  userAnswers: any;
}

function FinalResult({ userAnswers }: FinalResultProps): JSX.Element {
  const { rigths, wrongs } = getFinalResults(userAnswers);

  return (
    <div css={finalResultContainerCss}>
      <WhiteCard styles={whiteCardCss}>
        <div css={[resultsContainer]}>
          <p css={descriptionCss}>Preguntas correctas</p>
          <ResultValue correct>{rigths}</ResultValue>
        </div>
        <div css={[resultsContainer]}>
          <p css={descriptionCss}>Preguntas incorrectas</p>
          <ResultValue>{wrongs}</ResultValue>
        </div>
      </WhiteCard>

      <button css={buttonCss}>
        <SvgIcon
          iconName="replay"
          width="25px"
          height="25px"
          alt="Replay"
          color="#29DBC9"
        />
        Reintentar
      </button>
      <button css={buttonCss}>
        <SvgIcon iconName="price" width="35px" height="35px" alt="Premio" />
        Tabla de posiciones
      </button>
    </div>
  );
}

export default FinalResult;
