import { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import styled from "styled-components";

import { GlassMierCatImg } from "../../shared/constants";

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity: any = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const slide: any = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: 1.2,
        ease: [0.1, 0.87, 1, 0.13],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Wrapper>
        <SlideContainer {...anim(slide)}>
          <BackgroundContainer>
            <BackgroundImg src={GlassMierCatImg} alt="GlassMierCatImg" />
          </BackgroundContainer>
        </SlideContainer>
        <MotionContainer {...anim(opacity)}>{children}</MotionContainer>
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
`;

const SlideContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const BackgroundImg = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
`;
