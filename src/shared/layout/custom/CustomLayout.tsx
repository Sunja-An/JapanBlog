import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import TransitionProvider from "../../../app/provider/TransitionProvider";

type T_CustomLayout = {
  isHamburger: boolean;
};

function CustomLayout({ isHamburger }: T_CustomLayout) {
  return (
    <TransitionProvider>
      <Wrapper>
        {isHamburger && <Header />}
        <MainContainer isheader={true}>
          <Outlet />
        </MainContainer>
      </Wrapper>
    </TransitionProvider>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
`;

const MainContainer = styled.section<{ isheader: boolean }>`
  margin-top: ${(props) => (props.isheader ? "120px" : "0")};
`;

export { CustomLayout };
