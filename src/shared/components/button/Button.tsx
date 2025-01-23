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
    router("/blog");
  };

  return (
    <FootBtnWrapper>
      <RiveComponent onClick={onClickBtn} />
    </FootBtnWrapper>
  );
}

const FootBtnWrapper = styled.div`
  min-width: 200px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <IconBox icon={JapanIcon} />
        <InnerText>日本語</InnerText>
      </FlagBtn>
    );
  } else if (lang === "kor") {
    return (
      <FlagBtn>
        <IconBox icon={KoreaIcon} />
        <InnerText>한국어</InnerText>
      </FlagBtn>
    );
  } else {
    return (
      <FlagBtn>
        <IconBox icon={AmericaIcon} />
        <InnerText>Englishs</InnerText>
      </FlagBtn>
    );
  }
}

const FlagBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.img<{ icon: string }>`
  width: 30px;
  height: 20px;
  object-fit: cover;
  background-image: url(${(props) => props.icon});
`;

const InnerText = styled.span`
  font-family: "";
  font-weight: 500;
  font-size: 20px;
  line-height: 2px;
  color: black;
`;

type T_SNS = {
  sns: "instagram" | "github" | "linkedIn";
};

export function SNSButton({ sns }: T_SNS) {
  return <div></div>;
}
