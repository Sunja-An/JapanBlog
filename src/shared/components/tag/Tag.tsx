import styled from "styled-components";
import { Tag } from "../../constants/tag";

export function TagIcon(tag: Tag) {
  const tagIcon = () => {
    switch (tag) {
      case "CSS":
        return <div></div>;
    }
  };

  return (
    <TagWrapper>
      {tagIcon()}
      <TagText>{tag}</TagText>
    </TagWrapper>
  );
}

const TagWrapper = styled.div`
  padding: 5px 10px;
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const TagText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: black;
`;
