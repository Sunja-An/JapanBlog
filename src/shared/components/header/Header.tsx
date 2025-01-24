import styled from "styled-components";

import { SONULogo } from "../../constants";
import { useNavigate } from "react-router-dom";

function Header() {
  const router = useNavigate();

  const onClickRouting = (url: string) => {
    router(`/${url}`);
  };

  return (
    <Wrapper>
      <NavContainer>
        <NavBox>
          <NavContent onClick={() => onClickRouting("introduce")}>
            introduce
          </NavContent>
        </NavBox>
        <LogoBox>
          <Logo
            src={SONULogo}
            alt="logo"
            onClick={() => onClickRouting("blog")}
          />
        </LogoBox>
        <NavBox>
          <NavContent onClick={() => onClickRouting("portfolio")}>
            portfolio
          </NavContent>
        </NavBox>
      </NavContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.nav`
  padding: 20px 20px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 40px;
  }
`;

const NavBox = styled.ul`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavContent = styled.li`
  padding: 30px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoBox = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

export { Header };
