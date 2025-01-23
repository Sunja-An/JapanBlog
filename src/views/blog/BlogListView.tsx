import styled from "styled-components";

export default function BlogListView() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 120px 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: black;
`;
