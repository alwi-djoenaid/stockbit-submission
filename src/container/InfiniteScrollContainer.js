// import axios from "axios";
// import { useEffect, useState } from "react";
// import CONFIG from "../config";
// import MovieService from "../services/MovieService";

// const useSearchMovie = (movieName, pageNumber) => {
//   const movieService = new MovieService();
//   const [movieList, setMovieList] = useState([]);
//   const [hasMore, setHasMore] = useState(false);

//   useEffect(() => {
//     setMovieList([]);
//   }, [movieName])

//   useEffect( () => {
//     let cancel;
//     axios({
//       method: 'GET',
//       url: `${CONFIG.BASE_URL}&s=${movieName}&page=${pageNumber}`,
//       cancelToken: new axios.CancelToken((c) => cancel = c)
//     }).then((response) => {
//       // console.log(response)
//       // console.log(response.data)
//       console.log(response.data.Search)
//       // setMovieList((oldList) => {
//       //   return [...new Set([...oldList, ...response.Search])]
//       // });
//       //console.log(movieList)
//     }).catch(e => {
//       if(axios.isCancel(e)) {
//         return;
//       }
//     })
//     return () => cancel();
//   }, [movieName, pageNumber]);

//   const getMovie = async (keyword, pageNumber) => {
//     let response = await movieService.getMovieByKeyword(keyword, pageNumber);
//     console.log(response);
//     return response.data;
//   }

//   return {movieList, hasMore};
// }

// export default useSearchMovie;
