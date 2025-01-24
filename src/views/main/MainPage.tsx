import styled from "styled-components";

import { MierCatImg } from "../../shared/constants";
import { FootButton } from "../../shared/components";

import gsap from "gsap";
import TransitionProvider from "../../app/provider/TransitionProvider";

function MainPage() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".title",
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    }
  );
  tl.fromTo(
    ".miercat",
    {
      opacity: 0,
      y: 360,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    }
  );

  return (
    <TransitionProvider>
      <Wrapper>
        <Container>
          <TitleContainer>
            <Title className="title">SONU</Title>
          </TitleContainer>
          <ContentContainer>
            <FootButton />
          </ContentContainer>
          <CharacterContainer>
            <Character
              src={MierCatImg}
              alt="MierCat-Image"
              className="miercat"
            />
          </CharacterContainer>
        </Container>
      </Wrapper>
    </TransitionProvider>
  );
}

const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
`;

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 60px;
  line-height: 5px;
  color: black;
`;

const ContentContainer = styled(TitleContainer)``;

const CharacterContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

const Character = styled.img`
  width: 360px;
  height: 360px;
`;

export { MainPage };
