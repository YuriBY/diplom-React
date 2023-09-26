import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import lefticon from "./../assets/left.png";
import { Heart } from "../components/Heart/Heart";
import star from "../assets/Star.png";
import chevron from "../assets/chevron-right.png";
import { Button } from "../components/Button/Button";


export const SingleBook = () => {
    const {isbn13} = useParams();
    const [bookData, setBookData] = useState({
        "error": '',
        "title": '',
        "subtitle": '',
        "authors": '',
        "publisher": '',
        'language': '',
        "isbn10": '',
        "isbn13": '',
        "pages": '',
        "year": '',
        "rating": '',
        "desc": '',
        "price": '',
        "image": '',
        "url": '',
        "pdf": {
                  "Chapter 2": '',
                  "Chapter 5": ''
               }
    });

    interface bookData {
        "error": string,
        "title": string,
        "subtitle": string,
        "authors": string,
        "publisher": string,
        'language': string,
        "isbn10": string,
        "isbn13": string,
        "pages": string,
        "year": string,
        "rating": string,
        "desc": string,
        "price": string,
        "image": string,
        "url": string,
        "pdf": {
                  "Chapter 2": string,
                  "Chapter 5": string
               }
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.itbook.store/1.0/books/${isbn13}`
                );
                setBookData(response.data); // Сохраняем данные в состоянии компонента
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchData(); 
    }, [isbn13]); 

    const rating = parseInt(bookData.rating);

      
    return (
        <>
        <div className="w-[1120px] h-[1300px] m-auto border-2 border-solid">
            <Link to={'/'}><img src={lefticon} alt="" /></Link>
            
            <h1 className="uppercase font-bebas font-bold text-5xl mt-4">{bookData.title}</h1>
            <div className="flex flex-wrap mt-8 justify-between">
                <div className="w-[544px] h-[472px] bg-[#FEE9E2] relative">
                    <img src={bookData.image} alt="" className="w-[300px] h-[350px] m-auto mt-10"/>
                    <div className="absolute top-0 right-0">
                        <Heart disabled={false}/>
                    </div>
                </div>
                <div className="w-[448px] h-[472px] relative">
                    <div className="flex flex-row justify-between mt-8">
                        <div className="font-bebas font-bold text-4xl">{bookData.price}</div>
                        <div className="w-32 h-4 flex flex-row">
                        {Array.from({ length: rating }).map((_, index) => (
                            <img src={star} alt="" key={index} className="w-4 h-4 mt-3 mr-2"/>
                        ))}
                        </div>
                    </div>
                    <div className="w-full h-32 mt-4">
                        <div className="flex flex-row justify-between font-helios">
                            <h1 className="text-[#A8A8A8]">Authors</h1>
                            <div className="text-[#313037]">{bookData.authors}</div>
                        </div>
                        <div className="flex flex-row justify-between font-helios">
                            <h1 className="text-[#A8A8A8]">Publisher</h1>
                            <div className="text-[#313037]">{bookData.publisher}</div>
                        </div>
                        <div className="flex flex-row justify-between font-helios">
                            <h1 className="text-[#A8A8A8]">Language</h1>
                            <div className="text-[#313037]">{bookData.language}</div>
                        </div>
                        <div className="flex flex-row justify-between font-helios">
                            <h1 className="text-[#A8A8A8]">Format</h1>
                            <div className="text-[#313037]">book / ebook (PDF)</div>
                        </div>

                    </div>
                    <div className="flex flex-row">
                        <div className="font-helios text-[#313037]">More detalise</div>
                        <img src={chevron} alt="" className="w-4 h-4 my-auto"/>
                    </div>
                    <div className="w-full h-16 bg-[#313037] text-white mt-16 font-bebas font-bold uppercase text-small cursor-pointer text-center py-4">
                        <Button value={'ADD TO CART'}/>
                    </div>

                    
                    <div className="font-helios text-[#313037] absolute bottom-0 inset-x-40 text-center">Preview book</div>
                    

                </div>
            </div>

        </div>
        <div>

        </div>

       
        
        </>
       

    )
}