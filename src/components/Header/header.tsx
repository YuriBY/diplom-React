import { KeyboardEvent, useState } from "react";
import bookstore from "../../assets/Bookstore.png";
import iconSearch from "../../assets/Icon-Search.png";
import box from "../../assets/shopping-bag 0.png";
import shoppingBox from "../../assets/shopping-bag 1.png";
import heart from "../../assets/heart.png";
import favotiteHeart from "../../assets/favorite.png";
import man from "../../assets/man.png";
import burger from "../../assets/Burger.png";
import x from '../../assets/x (2).png'
import { fetchBooks, searchBooks } from "../../redux/books/booksSlice";
import { addSearchValue } from "../../redux/searchValue/searchValueSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Input } from "../Input/Input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { selectAllBooksInCart } from "../../redux/cart/cartSlice";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { selectFavorite } from "../../redux/books/favoriteSlice";
import { Button } from "../Button/Button";

export const Header = () => {
  const [visibleInput, setVisibleInput] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const myCartBooks = useAppSelector((state: RootState) =>
    selectAllBooksInCart(state)
  );
  const navigate = useNavigate();

  
  const myFavoritesBooks = useAppSelector((state: RootState) =>
    selectFavorite(state)
  );

  const userDataString = localStorage.getItem("onlineUser");

  
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((param) => {
      if (!e.target.value.length) {
        param.delete("search");
      } else {
        param.set("search", e.target.value);
      }
      return param;
    });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value) {
        dispatch(searchBooks(e.currentTarget.value));
        dispatch(addSearchValue(e.currentTarget.value));
        setSearchParams(`page=1&search=${e.currentTarget.value}`);
        setVisibleInput(false);
      } else {
        dispatch(fetchBooks());
        dispatch(addSearchValue(""));
        setSearchParams({ page: "1" });
        setVisibleInput(false);
      }
    }
  };

  const handeleVisibleInput = () => {
    setVisibleInput((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.setItem("onlineUser", ``);
    setVisibleInput(false);
    
  };

  const handleSignIn = () => {
    navigate('/signin')
  };

  const inputOpacityClass = visibleInput ? "opacity-100" : "opacity-0";

  return (
    <>
      <div className="flex md:flex-row flex-wrap md:flex-nowrap m-auto lg:grow-0 lg:shrink-0 lg:basis-auto lg:justify-between lg:w-3/5 md:w-11/12 h-36 ">
        <div className="md:w-full lg:w-1/6 h-7 py-10 order-1 md:order-none">
          <Link to={"/"}>
            <img
              src={bookstore}
              alt=""
              className="ml-4 md:-translate-x-4 lg:translate-x-0 lg:ml-0"
            />
          </Link>
        </div>
        <div
          className={`${inputOpacityClass} order-last md:order-none ml-4 md:self-end lg:place-self-auto mr-8 lg:mr-0 w-full 
        lg:w-6/12 lg:h-14 lg:my-6 lg:flex lg:opacity-100 translate-y-8 lg:translate-x-0 translate-x-1 lg:translate-y-0`}
        >
          <div className="block relative w-full">
            <Input
              value={searchParams.get("search") || ""}
              rightIcon={<img src={iconSearch} alt="Search" />}
              mode="withBorder"
              placeholder="Search"
              onChange={handleSearchInputChange}
              onKeyDown={onKeyDown}             
            />
          </div>
        </div>
        <div className="w-1/2 lg:w-1/6 h-14 grow-1 my-6 flex flex-row justify-between order-2 md:order-none">
          <Link to={"/favorite"}>
            {myFavoritesBooks.length ? (
              <img
                src={favotiteHeart}
                alt=""
                className="invisible lg:visible"
              />
            ) : (
              <img src={heart} alt="" className="invisible lg:visible" />
            )}
          </Link>

          <Link to={"/cart"}>
            {myCartBooks.length ? (
              <img
                src={shoppingBox}
                alt=""
                className="ml-20 mt-[18px] w-6 h-6 md:-translate-x-16 lg:translate-x-0 lg:ml-0"
              />
            ) : (
              <img
                src={box}
                alt=""
                className="md:ml-20 mt-[18px] w-6 h-6 md:-translate-x-16 lg:translate-x-0 lg:ml-0"
              />
            )}
          </Link>

          <Link to={'/signin'}>
            <img
              src={man}
              alt=""
              className="hidden lg:inline lg:w-6 lg:h-6 lg:my-[14px] lg:ml-2"
            />
          </Link>
          
          <img
            src={visibleInput ? x : burger}
            alt=""
            className="w-6 h-6 mx-4 my-5 lg:translate-x-0 lg:hidden"
            onClick={handeleVisibleInput}
          />
        </div>
      </div>
      {visibleInput ? 
      <>
        <div className="h-px w-11/12 mx-auto bg-[#E7E7E7] -translate-y-12"></div>
        <div className=" bg-white w-full h-[640px]">
          <div className="w-11/12 mx-auto h-72 flex flex-col">
            
              <div className="font-bebas font-bold uppercase mx-auto mt-16 text-[32px] "><Link to={'/favorite'} onClick={() => setVisibleInput(false)}>favorites </Link></div>
           
            
            <div className="font-bebas font-bold uppercase mx-auto mt-4 text-[32px] "><Link to={'/cart'} onClick={() => setVisibleInput(false)}>cart</Link></div>
          </div>
          
          <div className="mt-4 w-11/12 mx-auto h-14 bg-[#313037] text-white font-bebas font-bold text-2xl text-center pt-3">
              <Button value={userDataString ? "LOG OUT" : "SIGN IN"}
               onClick={userDataString ? handleLogout : handleSignIn}/>
          </div>
        </div>
      </> : ''}
    </>
  );
};
