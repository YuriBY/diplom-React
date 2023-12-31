import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import lefticon from "./../assets/left.png";
import { Heart } from "../components/Heart/Heart";
import star from "../assets/Star.png";
import whitestar from "../assets/Icon-Star.png";
import chevron from "../assets/chevron-right.png";
import { Button } from "../components/Button/Button";
import { Tabs } from "../components/Tabs/Tabs";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import dots from "../assets/more-horizontal.png";
import { useAppDispatch } from "../redux/hooks";
import { addtoCart } from "../redux/cart/cartSlice";
import { addtoFavorite, deleteFromFavorite } from "../redux/books/favoriteSlice";

export interface bookData {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  amount?: number;
  totalPrice?: number;
  favorite?: boolean
  pdf: {
    "Chapter 2": string;
    "Chapter 5": string;
  };
}

export const SingleBook = () => {
  const [colorButton, setColorButton] = useState('bg-[#313037]');
  const [openDetails, setOpenDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isbn13 } = useParams();
  const [bookData, setBookData] = useState({
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    language: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {
      "Chapter 2": "",
      "Chapter 5": "",
    },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.itbook.store/1.0/books/${isbn13}`
        );
        setBookData(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, [isbn13]);

  const rating = parseInt(bookData.rating);
  const absentStars = 5 - rating;

  const handleAddToCart = () => {
    dispatch(addtoCart(bookData));
    setColorButton('bg-[#A8A8A8]');
  };

  const handleAddToFavorite = (e: React.MouseEvent<HTMLImageElement> ) => {
    const isbn13 = (e.target as HTMLElement).id;
    if (!isFavorite) {
      dispatch(addtoFavorite(bookData));
      setIsFavorite(true);
    } else {
      dispatch(deleteFromFavorite(isbn13))
      setIsFavorite(false);
    }   
  };

  return (
    <>
      <div className="w-11/12 lg:w-3/5 h-[1500px] lg:h-[900px] m-auto">
        <Link to={"/"}>
          <img src={lefticon} alt="" />
        </Link>
        

        <h1 className="uppercase font-bebas font-bold text-2xl lg:text-5xl mt-4">
          {bookData.title}
        </h1>
        <div className="flex flex-wrap mt-8 justify-between">
          <div className="w-[272px] h-[272px] md:w-[688px] md:h-[472px] lg:w-[544px] lg:h-[472px] bg-[#FEE9E2] relative">
            <img
              src={bookData.image}
              alt=""
              className="w-[150px] h-[175px] md:w-[300px] md:h-[350px] m-auto mt-10"
            />
            <div className="absolute top-0 right-0" id={bookData.isbn13} onClick={handleAddToFavorite}>
              <Heart disabled={false}/>
            </div>
          </div>
          <div className="w-full lg:w-[448px] h-[596px] lg:h-[472px] relative">
            <div className="flex flex-row justify-between mt-8">
              <div className="font-bebas font-bold text-4xl">
                {bookData.price}
              </div>
              <div className="w-32 h-4 flex flex-row">
                {Array.from({ length: rating }).map((_, index) => (
                  <img
                    src={star}
                    alt=""
                    key={index}
                    className="w-4 h-4 mt-3 mr-2"
                  />
                ))}
                {Array.from({ length: absentStars }).map((_, index) => (
                  <img
                    src={whitestar}
                    alt=""
                    key={index}
                    className="w-4 h-4 mt-3 mr-2"
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-60 md:h-32 mt-4">
              <div className="flex flex-col md:flex-row md:justify-between font-helios">
                <h1 className="text-[#A8A8A8]">Authors</h1>
                <div className="text-[#313037]">{bookData.authors}</div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between font-helios">
                <h1 className="text-[#A8A8A8]">Publisher</h1>
                <div className="text-[#313037]">{bookData.publisher}</div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between font-helios">
                <h1 className="text-[#A8A8A8]">Language</h1>
                <div className="text-[#313037]">{bookData.language}</div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between font-helios">
                <h1 className="text-[#A8A8A8]">Format</h1>
                <div className="text-[#313037]">book / ebook (PDF)</div>
              </div>
            </div>
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => setOpenDetails((prev) => !prev)}
            >
              <div className="font-helios text-[#313037]">More detalise</div>
              <img src={chevron} alt="" className="w-4 h-4 my-auto" />
            </div>

            <div className="w-full h-24 mt-4">
              {openDetails ? (
                <>
                  <div className="flex flex-row justify-between font-helios">
                    <h1 className="text-[#A8A8A8]">Authors</h1>
                    <div className="text-[#313037]">{bookData.authors}</div>
                  </div>
                  <div className="flex flex-row justify-between font-helios">
                    <h1 className="text-[#A8A8A8]">Publisher</h1>
                    <div className="text-[#313037]">{bookData.publisher}</div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className={`${colorButton} text-white cursor-pointer text-center py-4`} >
              <Button
                classname="w-full h-16 font-bebas font-bold text-xl uppercase"
                value={"add to cart"}
                onClick={handleAddToCart}
              />
            </div>

            <div className="font-helios text-[#313037] absolute bottom-0 inset-x-16 md:inset-x-0 lg:inset-x-40 text-center">
              Preview book
            </div>
          </div>
        </div>
        <Tabs
          desc={bookData.desc}
          authors={bookData.authors}
          subtitle={bookData.subtitle}
        />
        <div className="flex flex-row mt-80 lg:mt-40 w-40 justify-between">
          <img src={facebook} alt="" className="w-6 h-6 cursor-pointer" />
          <img src={twitter} alt="" className="w-6 h-6 cursor-pointer" />
          <img src={dots} alt="" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
