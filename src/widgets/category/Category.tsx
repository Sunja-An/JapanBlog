import styled from "styled-components";
import { CategoryContent } from "../../shared/constants";

function Category() {
  return (
    <Wrapper>
      {CategoryContent.map((item, key: number) => {
        return (
          <CategoryBox key={key}>
            <CategoryHeader>{item.title}</CategoryHeader>
            {item.content.map((item: string, key: number) => {
              return <CategorySubTitle key={key}>{item}</CategorySubTitle>;
            })}
          </CategoryBox>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
  width: 300px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: 10px;
  border-color: black;
  border-radius: 18px;
  box-shadow: 8px 8px 4px gray;
  gap: 4px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

const CategoryHeader = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

const CategorySubTitle = styled.span`
  margin-left: 16px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

export { Category };
