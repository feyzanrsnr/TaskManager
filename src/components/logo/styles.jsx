import { Link } from "react-router";
import styled from "styled-components";

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -1px;
  width: 48px;
  height: 48px;
  font-size: var(--font-xl);
  border: 1px solid var(--border-color);
  padding: var(--space-m);
  border-radius: var(--border-radius-m);
`;

export const Text = styled.p`
filter: drop-shadow(0 0 5px var(--gray));
`;