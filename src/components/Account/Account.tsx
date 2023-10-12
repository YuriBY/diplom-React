import star from "../../assets/Star.png";
import whiteStar from "../../assets/Icon-Star.png";
import { SingleBook } from "../../models";
import { useMemo } from "react";
import { bookData } from "../../pages/SingleBook";
import minus from "../../assets/Minus.png";
import plus from "../../assets/Plus.png";
import x from "../../assets/x (2).png";
import redHeart from "../../assets/redHeart.png";
import { useAppDispatch } from "../../redux/hooks";
import { deleteFromCart, increaseItemAmount, decreaseItemAmount } from "../../redux/cart/cartSlice";
import { deleteFromFavorite } from "../../redux/books/favoriteSlice";



export const Book = () => {
 
  
  
  return  (
    <div className="border-2 border-solid w-3/5 h-[780px]"></div>
    
  ) 
  
  };
