import styled from "styled-components";
import { test } from "../../shared/constants";

function SingleBlogView() {
  const data = test;
  return (
    <Wrapper>
      {data.title}
      <code></code>
    </Wrapper>
  );
}

export { SingleBlogView };

const Wrapper = styled.div`
  width: 100%;
`;
