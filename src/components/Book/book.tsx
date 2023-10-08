import star from "../../assets/Star.png";
import whiteStar from "../../assets/Icon-Star.png";
import { SingleBook } from "../../models";
import { useMemo } from "react";
import { bookData } from "../../pages/SingleBook";
import minus from "../../assets/Minus.png";
import plus from "../../assets/Plus.png";
import x from "../../assets/x (2).png";
import { useAppDispatch } from "../../redux/hooks";
import { deleteFromCart, increaseItemAmount, decreaseItemAmount } from "../../redux/cart/cartSlice";
import { log } from "console";

const colorList = [
  "bg-[#D7E4FD]",
  "bg-[#CAEFF0]",
  "bg-[#F4EEFD]",
  "bg-[#FEE9E2]",
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface BookProps {
  book: SingleBook | bookData;
}

export const Book = ({ book }: BookProps) => {
  const randomClassColor = useMemo(() => colorList[getRandomInt(4)], []);
  const isSingleBook = (book as bookData).language !== undefined;
  const dispatch = useAppDispatch();

  const deleteItemFromCart = (event: React.MouseEvent<HTMLImageElement>) => {
    const isbn13 = (event.target as HTMLImageElement).id;
    console.log(isbn13);
    
    dispatch(deleteFromCart(isbn13));
  };

  const encreaseAmount = (event: React.MouseEvent<HTMLImageElement>) => {
    const isbn13 = (event.target as HTMLImageElement).id;
    dispatch(increaseItemAmount(isbn13));
  };

  const decreaseAmount = (event: React.MouseEvent<HTMLImageElement>) => {
    const isbn13 = (event.target as HTMLImageElement).id;
    dispatch(decreaseItemAmount(isbn13));
  }
  
  return isSingleBook ? (
    <div className="border-b-2 border-solid lg:w-full h-60 flex flex-row">
      <div className={`flex-0 w-[256px] h-[192px] ${randomClassColor}`}>
        <img
          src={(book as bookData).image}
          alt=""
          className="w-[163px] h-[190px] mx-auto"
        />
      </div>
      <div className="flex-1 flex flex-col w-1/2 ml-10">
        <h1 className="font-bebas font-bold text-2xl uppercase text-[#313037] mt-3">
          {(book as bookData).title}
        </h1>
        <h4 className="font-helios text-[#A8A8A8] mt-3">
          {(book as bookData).authors}
        </h4>
        <div className="flex flex-row mt-12">
            <div className="w-14 h-14">
                <img src={minus} alt="" id={(book as bookData).isbn13} className="w-6 h-6 mt-2 cursor-pointer" onClick={decreaseAmount}/>
            </div>          
          <div className="w-14 h-14 text-3xl">{(book as bookData).amount}</div>
          <div className="w-14 h-14">
            <img src={plus} alt="" id={(book as bookData).isbn13} className="w-6 h-6 mt-2 cursor-pointer" onClick={encreaseAmount}/>
          </div>
          
        </div>
      </div>
      <div className="flex-0 flex w-1/4 flex-row justify-between my-auto">
        <div className="font-bebas font-bold text-4xl text-[#313037]">
          {(book as bookData).totalPrice?.toFixed(2)}
        </div>
        <img src={x} alt="" className="w-6 h-6 cursor-pointer" id={(book as bookData).isbn13} onClick={deleteItemFromCart}/>
      </div>
    </div>
  ) : (
    <div
      className={`border-2 border-solid w-full mt-12 lg:mt-0 md:w-[328px] lg:w-[352px] h-[454px] relative`}
    >
      <div className={`h-[254px] ${randomClassColor}`}>
        <img
          src={(book as SingleBook).image}
          alt=""
          className="w-[226px] h-[264px] mx-auto"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bebas font-bold text-2xl uppercase text-[#313037] ">
          {" "}
          {(book as SingleBook).title}{" "}
        </h1>
        <h4 className=" font-helios text-[#A8A8A8] ">
          {(book as SingleBook).subtitle}
        </h4>
        <div className="mt-10 flex flex-row absolute bottom-0">
          <div className="font-bebas font-bold text-2xl text-[#313037]">
            {(book as SingleBook).price}
          </div>
          <div className="flex flex-row gap-2 ml-20 lg:ml-40">
            <img src={star} alt="" className="w-4 h-4 my-auto" />
            <img src={star} alt="" className="w-4 h-4 my-auto" />
            <img src={star} alt="" className="w-4 h-4 my-auto" />
            <img src={star} alt="" className="w-4 h-4 my-auto" />
            <img src={whiteStar} alt="" className="w-4 h-4 my-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
