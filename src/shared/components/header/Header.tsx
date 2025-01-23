import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <NavContainer>
        <NavBox>
          <NavContent>introduce</NavContent>
        </NavBox>
        <NavBox>
          <NavContent>portfolio</NavContent>
        </NavBox>
      </NavContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  min-height: 120px;
`;

const NavContainer = styled.nav`
  padding: 20px 120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const NavBox = styled.ul`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export { Header };
