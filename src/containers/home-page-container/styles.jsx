import styled from "styled-components";

export const HomePageContainer = styled.section`
  display:flex;
  flex-direction:column;
  position:absolute;
`;

export const Title = styled.h1`
  font-size: var(--font-xxxl);

  span {
    font-weight: 700;
  }
`;

export const Text = styled.p`
  font-size:20px;
  font-style:italic;
`;

export const Header = styled.h3`
    font-size:30px;
    font-weight:600;
`

export const FlexDiv = styled.div`
    position:relative;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`