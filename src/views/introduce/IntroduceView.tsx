import styled from "styled-components";
import TransitionProvider from "../../app/provider/TransitionProvider";

import { IntroduceContent } from "../../shared/constants";

function IntroduceView() {
  return (
    <TransitionProvider>
      <Wrapper>
        <ContentContainer>
          <NameTitle>{IntroduceContent.name}</NameTitle>
          <ContentText>{IntroduceContent.introduce}</ContentText>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>FrontEnd</ContentTitle>
          <ContentText>{IntroduceContent.frontEndTech}</ContentText>
        </ContentContainer>
      </Wrapper>
    </TransitionProvider>
  );
}

const Wrapper = styled.div`
  padding: 20px 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  align-items: start;
  gap: 32px;
  @media (max-width: 1024px) {
    padding: 20px 200px;
  }
  @media (max-width: 768px) {
    padding: 20px 100px;
  }
  @media (max-width: 624px) {
    padding: 20px 50px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  align-items: start;
`;

const NameTitle = styled.h1`
  font-family: "pretendard", sans-serif;
  font-size: 32px;
  line-height: 42px;
  font-weight: 800;
  color: black;
`;

const ContentTitle = styled.h2`
  font-family: "pretendard", sans-serif;
  font-size: 28px;
  line-height: 38px;
  font-weight: 600;
  color: black;
`;

const ContentText = styled.span`
  font-family: "pretendard", sans-serif;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  color: black;
`;

export { IntroduceView };
