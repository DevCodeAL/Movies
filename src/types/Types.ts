//    Types for navigations links/menus
   export type NavLinks = {
        browse: string;
        trending: string;
        following: string;
        your_videos: string;
        playlist: string;
    };

     export interface Movie {
          id: number;
          title: string;
          poster_path: string | null;
          original_title: string;
          overview: string;
          popularity: number;
          vote_average: number;
          vote_count: number;
          release_date: string;
          genre_ids: string;
     };

     export interface MoviesResponse {
          page: number;
          results: Movie[];
          total_pages: number;
          total_results: number;
     };


     export interface Genres {
          id: number;
          name: string;
     };




