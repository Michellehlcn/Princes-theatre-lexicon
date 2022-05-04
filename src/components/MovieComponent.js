import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

const MovieComponent = (props) => {
  const { Poster, Price, Title, cinemaWorldPrice } = props.movie;

  return (
    <MovieContainer>
      <CoverImage src={Poster} alt="" />
      <MovieName>{Title}</MovieName>

      <InfoColumn>
        <MovieInfo>
          FilmWorld:
          <span style={Price > cinemaWorldPrice ? { color: "green" } : null}>
            {Price}
          </span>
        </MovieInfo>
        <MovieInfo>
          CinemaWorld:
          <span style={Price < cinemaWorldPrice ? { color: "green" } : null}>
            {cinemaWorldPrice}
          </span>
        </MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;
