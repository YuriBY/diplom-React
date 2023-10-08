import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import lefticon from "../assets/left.png";
import { Title } from "../components/Title/Title";
import { Book } from "../components/Book/Book";
import { Button } from "../components/Button/Button";
import { selectFavorite } from "../redux/books/favoriteSlice";
import { selectAllBooks } from "../redux/books/booksSlice";

export const FavoriteBooks = () => {
  const favoriteBooks = useAppSelector((state: RootState) =>
    selectFavorite(state)
  );
  const books = useAppSelector((state: RootState) => selectAllBooks(state).books);
  
  
  if (favoriteBooks.length) {

    return (
      <>
         <div className="w-11/12 lg:w-3/5 mx-auto">
          <Link to={"/"}>
            <img src={lefticon} alt="" />
          </Link>
          <Title text="Favorites"/>
          <div className="w-full lg:w-full lg:mt-12 mb-20 flex flex-col">
            {favoriteBooks.map((book) => (
              <Book key={book.isbn13} book={book} />
            ))}
          </div>   
          <div className="uppercase font-bebas font-bold text-4xl">Popular Books</div>
          <div className="w-full flex flex-row flex-wrap justify-between mt-20">
            {books.slice(0, 3).map((book) => (
              <Link key={book.isbn13} to={`/${book.isbn13}`}>
                  <Book book={book} />
              </Link>              
        ))}

        </div>

        </div>
        
      </>
    );
  } else {
    return (
      <div className="h-[810px] w-3/5 mx-auto font-bebas text-5xl">
       Favorites are empty.{" "}
        <Link to={"/"}>
          <span className="text-[blue]">Back to main page</span>
        </Link>
      </div>
    );
  }
};
