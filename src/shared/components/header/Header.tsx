import styled from "styled-components";

import { SONULogo } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const router = useNavigate();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickRouting = (url: string) => {
    router(`/${url}`);
  };

  return (
    <Wrapper scrolled={scrolled}>
      <NavContainer>
        <NavBox>
          <NavContent onClick={() => onClickRouting("introduce")}>
            introduce
          </NavContent>
        </NavBox>
        <LogoBox scrolled={scrolled}>
          <Logo
            src={SONULogo}
            alt="logo"
            scrolled={scrolled}
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

const Wrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.5s all ease-in-out;
  min-height: ${(props) => (props.scrolled ? "80px" : "120px")};
  height: ${(props) => (props.scrolled ? "100px" : "120px")};
  background: ${(props) => (props.scrolled ? "#FAFAFA" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  box-shadow: ${(props) =>
    props.scrolled && "8px 0px 12px rgba(255, 255, 255, 0.1)"};
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
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoBox = styled.div<{ scrolled: boolean }>`
  transition: 0.5s all ease-in-out;
  width: ${(props) => (props.scrolled ? "75px" : "100px")};
  height: ${(props) => (props.scrolled ? "75px" : "100px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img<{ scrolled: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s all ease-in-out;
  cursor: pointer;
  border-radius: ${(props) => (props.scrolled ? "4px" : "100%")};
`;

export { Header };
