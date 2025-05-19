import styled from "styled-components";
import Link from "next/link";

export default styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  background: white;
  font-size: 1.2rem;
  padding: 0.5rem 1.2rem;
  border: 2px solid var(--color-granite);
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: inherit;
  }
`;
