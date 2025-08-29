import type { JSX } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function NavigationBar(){

    const mainMenu: (string | JSX.Element)[] = [
        'New Movie',
         'Genre', 
         'Country', 
         'Movie', 
         'TV Series',
         "|",
         <IoSearchOutline className="text-2xl"/>
    ];

    return(
        <>
        <ul className="flex justify-end  gap-12  pr-8 text-white text-[14px]">
            {mainMenu.map((items, index)=> (
                <li key={index}>
                     <a href={`#${items}`}>{items}</a>
                </li>
            ))}
        </ul>
        </>
    )
}