import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <h1>Hey CodeZee! Let's Build A Netflix clone Today</h1> */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
