import "./App.css";
import styled from "styled-components";
import movieicon1 from "./icons/movieicon1.png";
import MovieComponent from "./components/MovieComponent";
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
  justify-content: space-evenly;
`;
function App() {
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src={movieicon1} />
          Prince's Theatre
        </AppName>
      </Header>
      <MovieListContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </MovieListContainer>
    </Container>
  );
}

export default App;
