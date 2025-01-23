import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";

type T_CustomLayout = {
  isHamburger: boolean;
};

function CustomLayout({ isHamburger }: T_CustomLayout) {
  return (
    <Wrapper>
      {isHamburger && (
        <HamburgerContainer>
          <Header />
        </HamburgerContainer>
      )}
      <MainContainer isHeader={true}>
        <Outlet />
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const HamburgerContainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
`;

const MainContainer = styled.section<{ isHeader: boolean }>`
  margin-top: ${(props) => (props.isHeader ? "120px" : "0")};
`;

export { CustomLayout };
