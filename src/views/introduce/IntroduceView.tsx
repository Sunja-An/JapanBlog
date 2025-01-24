import styled from "styled-components";
import TransitionProvider from "../../app/provider/TransitionProvider";

function IntroduceView() {
  return (
    <TransitionProvider>
      <Wrapper></Wrapper>
    </TransitionProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export { IntroduceView };
