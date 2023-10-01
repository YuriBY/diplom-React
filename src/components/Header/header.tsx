import { KeyboardEvent, useEffect, useState } from "react";
import bookstore from "../../assets/Bookstore.png";
import iconSearch from "../../assets/Icon-Search.png";
import box from "../../assets/box.png";
import heart from "../../assets/heart.png";
import man from "../../assets/man.png";
import burger from "../../assets/Burger.png";
import { fetchBooks, searchBooks } from "../../redux/books/booksSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Input } from "../Input/Input";
import { useSearchParams } from "react-router-dom";

export const Header = () => {
  const [visibleInput, setVisibleInput] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

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
        setSearchParams(`page=1&search=${e.currentTarget.value}`);
      } else {
        dispatch(fetchBooks());
        setSearchParams({ page: "1" });
      }
    }
  };

  const handeleVisibleInput = () => {
    setVisibleInput(prev => !prev)
  };

  const inputOpacityClass = visibleInput ? 'opacity-100' : 'opacity-0';
 

  return (
    <>
      <div className="flex flex-row m-auto lg:grow-0 lg:shrink-0 lg:basis-auto lg:justify-between lg:w-3/5 md:w-11/12 h-28  ">
        <div className="w-1/2 md:w-full lg:w-1/6 h-7 py-10">
          <img src={bookstore} alt="" className="ml-4 md:-translate-x-4 lg:translate-x-0 lg:ml-0" />
        </div>
        <div className={`${inputOpacityClass} order-last lg:order-none self-end lg:place-self-auto mr-8 lg:mr-0 w-full -translate-x-12 md:-translate-x-44 lg:translate-x-0
        lg:w-6/12 lg:h-14 lg:my-6 lg:flex lg:opacity-100`}>
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
        <div className="w-2/6 lg:w-1/6 h-14 grow-1 my-6 flex flex-row justify-between">         
          <img src={heart} alt="" className="invisible lg:visible"/>
          <img src={box} alt="" className="ml-20 md:translate-x-48 lg:translate-x-0 lg:ml-0"/>
          <img src={man} alt="" className="hidden lg:inline lg:w-6 lg:h-6 lg:my-[14px] lg:ml-2" />
          <img src={burger} alt="" className="w-6 h-6 my-4 md:translate-x-48 lg:translate-x-0 lg:hidden" onClick={handeleVisibleInput}/>
        </div>
      </div>
    </>
  );
};
