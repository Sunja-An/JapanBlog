import styled from "styled-components";
import { Tag } from "../../constants/tag";

type T_ListCard = {
  id: number;
  title: string;
  imageUrl: string;
  tag: Tag;
  date: string;
};

function ListCard({ id, imageUrl, title, date, tag }: T_ListCard) {
  return (
    <CardWrapper>
      <ImageContainer>
        <ImageBox src={imageUrl} alt={`Card-${id}`} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title ?? "No Data"}</Title>
        <SubCube>
          <Date>{date ?? "xx년 xx월 xx일"}</Date>
          <Date>{tag ?? "xx년 xx월 xx일"}</Date>
        </SubCube>
      </ContentContainer>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  min-width: 300px;
  max-height: 500px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  border-radius: 18px;
  background-color: white;
  box-shadow: 6px 6px 12px rgba(217, 217, 217, 1);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

const ContentContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-height: 200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: start;
  overflow: hidden;
`;

const SubCube = styled.div`
  padding: 0 10px;
  width: 80%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

export { ListCard };
