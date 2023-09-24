import bookstore from "../../assets/Bookstore.png";
import iconSearch from "../../assets/Icon-Search.png";
import box from "../../assets/box.png";
import heart from "../../assets/heart.png";
import man from "../../assets/man.png";
import { Input } from "../Input/Input";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-[1120px] h-28 m-auto ">
        <div className="w-1/6 h-7 py-10">
          <img src={bookstore} alt="" className="" />
        </div>
        <div className="w-6/12 h-14 my-6 flex">
           {/* <div className="relative w-full">
            <input
              type="search"
              placeholder="Search"
              className="w-full h-full pr-8 pl-[15px] border-solid border-2"
            />
            <img
              src={iconSearch}
              alt="Search"
              className="absolute top-3 right-0 h-8 p-2 cursor-pointer"
            />            
          </div> */}
          <div className="relative w-full">
              <Input rightIcon={<img src={iconSearch} alt="Search"/> } mode="withBorder" placeholder="Search"/>
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
