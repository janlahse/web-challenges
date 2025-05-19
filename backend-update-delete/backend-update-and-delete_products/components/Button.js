import styled from "styled-components";

export default styled.button`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  background: white;
  font-size: larger;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-nemo);
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;
