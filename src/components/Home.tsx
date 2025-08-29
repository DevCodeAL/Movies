import { VscTriangleRight } from "react-icons/vsc";
import { TbMathGreater } from "react-icons/tb";
import { PiLessThanBold } from "react-icons/pi";
import NavigationBar from "./NavigationBar";
import { useEffect, useState } from "react";
import { fetchGenres, fetchPopularMovies } from "../Api/Api";
import type { Movie, Genres } from "../types/Types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Home = ()=> {
const [movies, setMovies] = useState<Movie[]>([]);
const [genre, setGenre] = useState<Genres[]>([]);

  useEffect(()=>{
      const fetchMovies = async ()=>{
          try {
            const response = await fetchPopularMovies();
             setMovies(response.results);
            const response_genre = await fetchGenres();
            setGenre(response_genre);
          } catch (error) {
            console.log(error);
          }
      };

      fetchMovies();
  },[]);

  // Create a functions that filter a genres id
  // const getGenre = ()=> genre.map((item)=>{
  //     item.id.filter(t => t.id === id);
  // });

  
    return(
        <>                                        
         <main>
          <section className="relative flex justify-between w-full min-h-screen">
              {movies.slice(0, 1).map((item) => (
                <div key={item.id} className="absolute inset-0">
                  <img
                    src={`${IMAGE_BASE_URL}${item.poster_path}`}
                    alt="Popular Movies Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}                         
                <nav className="fixed w-full z-10 bg-black/30 backdrop-blur-md">
                  <div className="flex justify-between items-center p-2.5 pl-8">
                      <div className="flex items-center gap-2.5">
                        <div className="bg-[#db0000] rounded p-1 w-[80px] text-white font-bold m-1 text-center">NEW</div>  
                        <div className="text-white font-bold">MOVIES</div>
                      </div>
                      <div>
                         <NavigationBar/>
                      </div>
                  </div>
                </nav>
               <div className="relative flex items-center p-2.5 ml-20 mt-12">
                  <div className="p-10">
                    {movies.slice(0, 1).map((item)=> (
                      <div key={item.id}>
                         <h1 className="text-white font-bold text-4xl">{item.original_title}</h1>
                          <div className="flex justify-between gap-2.5 text-[12px] my-2.5 text-nowrap">
                          <div className="bg-[#db0000] text-white p-0.5 rounded">IMDb</div>
                          <div className="text-white">{item.popularity}</div>
                          <div className="text-gray-300">{item.vote_average}</div>
                          <div className="text-gray-200">|</div>
                          <div className="text-gray-200">{`${item.release_date} | 1 hour 55 munites | `}</div>
                       </div>

                       <div className="w-[300px]">
                            <p className="text-gray-300 text-[12px]">{item.overview}<br /> <span className="font-bold">See more...</span></p>
                       </div>

                       <div className="flex justify-start gap-2.5 my-2.5">
                          <button className="px-2.5 py-1.5 border border-gray-500 text-white rounded text-[12px]">Watch trailer</button>
                          <button className="px-2.5 py-1.5 flex items-center  bg-[#db0000] text-white rounded text-[12px]">
                          <div>
                               <VscTriangleRight/>
                          </div>
                          <div>
                               Watch Now
                          </div>
                         </button>
                       </div>

                        <div className="flex justify-start gap-2.5 mt-8 text-white">
                           <button className="border border-gray-500 p-1.5 rounded"><PiLessThanBold/></button>
                           <button className="border border-gray-500 p-1.5 rounded"><TbMathGreater/></button>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
              {/* Popular video items */}
               <div className="relative flex items-end gap-12 w-full">
                  <div className="flex gap-3 rounded overflow-hidden ">
                    {movies.slice(0, 5).map((item) => (
                      <div key={item.id} className="transition ease-in duration-150 delay-150 hover:scale-110">
                           <img src={`${IMAGE_BASE_URL}${item.poster_path}`} className="object-cover " alt="Popular Movies Image" />
                      </div>
                    ))}
                  </div>
               </div>


           </section>
           <section className="w-full bg-[#000000] min-h-screen">

           </section>

            <section className="w-full bg-[#564d4d] min-h-screen">

           </section>
         </main>
        </>
    );
};


export default Home;


