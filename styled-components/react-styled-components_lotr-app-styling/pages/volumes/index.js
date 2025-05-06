import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  return (
    <StyledContainer>
      <StyledHeader>The Lord of the Rings</StyledHeader>
      <p>{introduction}</p>
      <StyledHeader2>All Volumes</StyledHeader2>
      <StyledList>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <StyledLink href={`/volumes/${volume.slug}`}>
              <Image
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={70}
                height={115}
              />
              {volume.title}
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 20px;
`;

const StyledHeader = styled.h1`
  font-size: 44px;
  margin-bottom: 0;
`;

const StyledHeader2 = styled.h2`
  font-size: 35px;
  margin: 0;
  margin-top: 30px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
  width: 70px;
`;
