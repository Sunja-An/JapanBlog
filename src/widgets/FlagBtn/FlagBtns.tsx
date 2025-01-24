import { FlagButton } from "../../shared/components";
import styled from "styled-components";

function FlagBtns() {
  return (
    <Wrapper>
      <FlagButton lang="eng" />
      <FlagButton lang="kor" />
      <FlagButton lang="jpn" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export { FlagBtns };
