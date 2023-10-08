import { selectAllBooksInCart } from "../redux/cart/cartSlice";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import lefticon from "../assets/left.png";
import { Title } from "../components/Title/Title";
import { Book } from "../components/Book/Book";
import { Button } from "../components/Button/Button";

export const CartBooks = () => {
  const cartBooks = useAppSelector((state: RootState) =>
    selectAllBooksInCart(state)
  );
  console.log(cartBooks);
  const totalPrice = cartBooks.reduce((accumulator, book) => {
    // const priceWithoutDollar = book.price.replace('$', '');
    // const priceAsNumber = parseFloat(priceWithoutDollar);
    
    if (book.totalPrice !== undefined) {
      return accumulator + book.totalPrice;
    }
    
    return accumulator;
  }, 0);
  
  const vatSum = parseFloat((totalPrice * 0.1).toFixed(2));
  const sumWithoutVat = totalPrice - vatSum;
  
  if (cartBooks.length) {

    return (
      <>
        <div className="w-11/12 lg:w-3/5 h-[1500px] lg:h-[900px] mx-auto">
          <Link to={"/"}>
            <img src={lefticon} alt="" />
          </Link>
          <Title text="Your cart"/>
          <div className="w-full lg:mt-12 mb-20 flex flex-col">
            {cartBooks.map((book) => (
              <Book key={book.isbn13} book={book} />
            ))}
          </div>
          <div className="flex justify-end">
            <div className="w-1/4">
              <div className="flex flex-row justify-between font-helios mb-6">
                <h1 className="text-[#A8A8A8]">Sum total</h1>
                <h1 className="text-[#313037]">{`$ ${sumWithoutVat.toFixed(2)}`}</h1>
              </div>
              <div className="flex flex-row justify-between font-helios text-[#A8A8A8] mb-6">
                <h1 className="text-[#A8A8A8]">VAT</h1>
                <h1 className="text-[#313037]">{`$ ${vatSum.toFixed(2)}`}</h1>
              </div>
              <div className="uppercase flex flex-row justify-between font-bebas font-bold text-4xl text-[#313037] mb-6">
                <h1>total:</h1>
                <h1>{`$ ${totalPrice.toFixed(2)}`}</h1>
              </div>
              <div className="bg-[#313037] hover:bg-[#5B5A62] text-white font-bebas font-bold text-lg w-full h-14 text-center py-3 mb-6" >
                <Button value={`CHECK OUT`}/>
              </div>  
             
            </div>
            

          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="h-[810px] w-3/5 mx-auto font-bebas text-5xl">
        Your cart is empty.{" "}
        <Link to={"/"}>
          <span className="text-[blue]">Back to main page</span>
        </Link>
      </div>
    );
  }
};
