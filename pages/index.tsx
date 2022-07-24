import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Seo from "../compoents/Seo";
import NavBar from "./NavBar";
const API_KEY = "92ace6c539108aa296a66f3a4d8504ff";

interface moviesProps {
  id: number;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
}
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`api/movies`)).json();
      setMovies(results);
      console.log(results, "--");
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="home" />
      {!movies && <h4>Loading...</h4>}
      {movies.map((movie: moviesProps) => (
        <div key={movie.id} className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          ></img>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
