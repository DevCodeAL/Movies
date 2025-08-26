import { Link } from "react-router"
import { BsBrowserSafari } from "react-icons/bs";
import type { NavLinks } from "../types/Types.ts";

export default function SideBar(){

    const navlink: NavLinks[] = [
        {
            browse: '/browse',
            trending: '/trending',
            following: '/following',
            your_videos: '/your_videos',
            playlist: '/playlist',
        },
    ];

    return(
        <>
           <div className="absolute bg-gray-950 border-r border-gray-800 px-8 w-[200px] min-h-screen">
            <div>
                <Link to={'./'}>
                    <h1 className="font-bold text-center text-white p-2.5">Logo</h1>
                </Link>
                
            </div>
                <div className="py-6">
                    <ul>
                    {navlink.map((item, index)=> 
                        (<li key={index} className="flex flex-col gap-4 items-start text-[#ffff] font-semibold">
                             <span className="text-[#564d4d] font-bold text-xs">News Feed</span>
                            <Link to={item.browse} className="flex items-center gap-2.5 bg-[#db0000] py-1.5 pl-4 pr-12 rounded-2xl">
                             <div><BsBrowserSafari/></div>
                             <div>Browse</div>
                            </Link>
                            <Link to={item.trending}>Trending</Link>
                            <Link to={item.following}>Following</Link>
                            <Link to={item.your_videos}>Your Videos</Link>
                            <Link to={item.playlist}>Playlist</Link>
                        </li>)
                        )}
                </ul>
                </div>
           </div>
        </>
    )
};