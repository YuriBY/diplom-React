import { KeyboardEvent, useEffect } from "react";
import bookstore from "../../assets/Bookstore.png";
import iconSearch from "../../assets/Icon-Search.png";
import box from "../../assets/box.png";
import heart from "../../assets/heart.png";
import man from "../../assets/man.png";
import { fetchBooks, searchBooks } from "../../redux/books/booksSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Input } from "../Input/Input";
import { useSearchParams } from "react-router-dom";

export const Header = () => {
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

  return (
    <>
      <div className="flex flex-row grow-0 shrink-0 basis-auto justify-between w-[1120px] h-28 m-auto ">
        <div className="w-1/6 h-7 py-10">
          <img src={bookstore} alt="" className="" />
        </div>
        <div className="w-6/12 h-14 my-6 flex">
          <div className="relative w-full">
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
        <div className="w-1/6 h-14 my-6 flex flex-row">
          <img src={heart} alt="" />
          <img src={box} alt="" />
          <img src={man} alt="" className="w-6 h-6 my-[14px] ml-2" />
        </div>
      </div>
    </>
  );
};
