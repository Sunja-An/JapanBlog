import styled from "styled-components";
import TransitionProvider from "../../app/provider/TransitionProvider";
import { Category } from "../../widgets";
import { ListCard } from "../../shared/components/card/ListCard";

function BlogListView() {
  return (
    <TransitionProvider>
      <Wrapper>
        <Category />
        <Container>
          <HeaderText>backend</HeaderText>
          <ContentBox>
            <ListCard
              id={1}
              title="test"
              date="2024년 1월 2일"
              imageUrl="test"
              tag="React"
            />
            <ListCard
              id={1}
              title="test"
              date="2024년 1월 2일"
              imageUrl="test"
              tag="CSS"
            />
            <ListCard
              id={1}
              title="test"
              date="2024년 1월 2일"
              imageUrl="test"
              tag="Dart"
            />
          </ContentBox>
        </Container>
      </Wrapper>
    </TransitionProvider>
  );
}

const Wrapper = styled.div`
  padding: 40px 120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const HeaderText = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
`;

const ContentBox = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
`;

export { BlogListView };
