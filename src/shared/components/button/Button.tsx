import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
/*
 * Start Button
 */

export function FootButton() {
  const router = useNavigate();

  const stateMachineName = "Foot";
  const stateMachineInputName = "pressed";
  const { rive, RiveComponent } = useRive({
    src: "FootAnimation.riv",
    stateMachines: stateMachineName,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
  });
  const PressedInput = useStateMachineInput(
    rive,
    stateMachineName,
    stateMachineInputName
  );

  const onClickBtn = () => {
    PressedInput?.fire();
    setTimeout(() => {
      router("/blog");
    }, 1000);
  };

  return (
    <FootBtnWrapper>
      <RiveComponent onClick={onClickBtn} />
    </FootBtnWrapper>
  );
}

const FootBtnWrapper = styled.button`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;

/*
 * Flag Button
 */

import { JapanIcon, KoreaIcon, AmericaIcon } from "../../constants";

type T_FlagBtn = {
  lang: "kor" | "jpn" | "eng";
};

export function FlagButton({ lang }: T_FlagBtn) {
  console.log(JapanIcon);
  console.log(KoreaIcon);
  console.log(AmericaIcon);
  if (lang === "jpn") {
    return (
      <FlagBtn>
        <IconBox src={JapanIcon} alt="japanIcon" />
        <InnerText>日本語</InnerText>
      </FlagBtn>
    );
  } else if (lang === "kor") {
    return (
      <FlagBtn>
        <IconBox src={KoreaIcon} alt="koreaIcon" />
        <InnerText>한국어</InnerText>
      </FlagBtn>
    );
  } else {
    return (
      <FlagBtn>
        <IconBox src={AmericaIcon} alt="americaIcon" />
        <InnerText>English</InnerText>
      </FlagBtn>
    );
  }
}

const FlagBtn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: white;
  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const IconBox = styled.img`
  width: 30px;
  height: 20px;
  object-fit: cover;
`;

const InnerText = styled.span`
  font-family: "";
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: black;
`;

type T_SNS = {
  sns: "instagram" | "github" | "linkedIn";
};

export function SNSButton({ sns }: T_SNS) {
  return <div>{sns}</div>;
}
