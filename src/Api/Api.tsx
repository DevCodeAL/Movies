import axios from "axios";
import type { MoviesResponse, Genres } from "../types/Types";

   const API_KEY =  import.meta.env.VITE_API_KEY;
   const BASE_URL = "https://api.themoviedb.org/3";

   export const fetchPopularMovies = async ():Promise<MoviesResponse>=>{
        try {
            const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
            return response.data;
        } catch (error) {
            console.log(error);
        };
   };

   export const fetchGenres = async (): Promise<Genres>=>{
        try{
          const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
           return response.data;
         } catch(error){
           console.log(error);
        };
   };