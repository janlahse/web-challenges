import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
`;
