import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import lefticon from "./../assets/left.png";

export const SingleBook = () => {
    const {isbn13} = useParams();
    const [bookData, setBookData] = useState({
        "error": '',
        "title": '',
        "subtitle": '',
        "authors": '',
        "publisher": '',
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

        fetchData(); // Вызываем функцию для выполнения запроса
    }, [isbn13]); // Добавляем isbn13 в массив зависимостей
    
    return (
        <>
        <div className="w-[1120px] h-[1300px] m-auto border-2 border-solid">
            <img src={lefticon} alt="" />
            <h1 className="uppercase font-bebas font-bold text-5xl mt-4">{bookData.title}</h1>
            <div className="flex flex-wrap mt-8">
                <div className="w-[544px] h-[472px] bg-[#FEE9E2] relative">
                    <img src={bookData.image} alt="" className="w-[300px] h-[350px] m-auto mt-10"/>
                </div>
                <div className="w-[448px] h-[472px]"></div>
            </div>
        </div>
        <div>

        </div>

       
        
        </>
       

    )
}