import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { RootState } from "./../../redux/store";
import {useAppSelector } from "./../../redux/hooks";
import { selectAllBooks } from "./../../redux/books/booksSlice";
import { Link } from "react-router-dom";
import { Book } from "../Book/Book";

export const SingleBookLayout = () => {
  const books = useAppSelector((state: RootState) => selectAllBooks(state).books);
  console.log(books);
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow w-full mx-auto'>
        <Outlet />
      </div>
      
      <Footer>
        <div className="h-[1000px] flex flex-row mt-20 gap-5">
        {books.slice(0, 3).map((book) => (
          <Link key={book.isbn13} to={`/${book.isbn13}`}>
              <Book book={book} />
          </Link>
          
        ))}

        </div>
      </Footer>
    </div>
  );
};
