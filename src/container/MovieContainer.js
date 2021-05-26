import { useEffect, useState } from "react";
import MovieService from "../services/MovieService";

export default function useMovie() {
  const movieService = new MovieService();
  const [keyword, setKeyword] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const getMovieByKeyword = async (keyword) => {
    
  }

  useEffect(() => {
    let response = movieService.getMovieByKeyword(keyword);
    setMovieList(oldList => [...oldList, response]);
    return movieList;
  }, [keyword, pageNumber]);

  return {movieList, pageNumber};
}