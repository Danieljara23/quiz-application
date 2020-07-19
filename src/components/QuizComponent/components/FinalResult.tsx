import { css } from "@emotion/core";
import styled from "@emotion/styled";
import WhiteCard from "../../WhiteCard";
import Replay from "../../../../public/images/icons/replay.svg";
import SvgIcon from "../../SvgIcon";

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
  color: #3A3A3A;
  font-size: 12px;
  font-weight: bold;
`;

const ResultValue = styled.p`
  font-size: 29px;
  margin: 0;
  ${({correct}) => css`
    color: ${correct ? '#00A156': '#D9000F'}
  `}
`;


function getFinalResults(userAnswers){
  return userAnswers.reduce((obj, item)=>{
    if(!obj["rigths"]) obj["rigths"] = 0
    if(!obj["wrongs"]) obj["wrongs"] = 0
    if(item.correct){
      obj.rigths++;
    }else{
      obj.wrongs++;
    }
    return obj;
}, {})
}

function FinalResult({userAnswers}){

  const { rigths, wrongs } = getFinalResults(userAnswers);
  console.log(rigths, wrongs)

  return(
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

      <button>
        <SvgIcon iconName="pause" width="50px" height="50px" alt="icono" />
        {/* <Replay fill="blue" /> */}
        Reintentar
      </button>
      <button></button>

    </div>
  )

}

export default FinalResult;