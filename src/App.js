import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import styled from "styled-components";
import movieicon1 from "./icons/movieicon1.png";
import MovieComponent from "./components/MovieComponent";
import axios from "axios";
import api from "./api/Api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-evenly;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;
function App() {
  const [filmWorld, setFilmWorld] = useState([]);
  const [cinemaWorld, setCinemaWorld] = useState([]);

  useEffect(() => {
    const theaters = ["cinema", "film"];
    theaters.forEach((theater) => {
      async function getTheater() {
        const data = await api.getMoviesData(theater);
        if (data.Provider === "Film World") {
          setFilmWorld(data);
        } else {
          setCinemaWorld(data);
        }
      }
      getTheater();
    });
  }, []);

  const movies = useMemo(() => {
    if (!filmWorld.Provider) return [];
    return filmWorld.Movies.map((movie, index) => ({
      ...movie,
      cinemaWorldPrice:
        cinemaWorld.Provider && cinemaWorld.Movies[index]?.Price,
    }));
  }, [filmWorld, cinemaWorld]);

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src={movieicon1} />
          Prince's Theatre
        </AppName>
      </Header>
      <MovieListContainer>
        {movies.map((movie, index) => (
          <MovieComponent key={index} movie={movie} />
        ))}
      </MovieListContainer>
    </Container>
  );
}

export default App;
