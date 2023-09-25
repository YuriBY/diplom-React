import { Book } from "../components/Book/Book";
import { Title } from "../components/Title/Title";
import { searchBooks, selectAllBooks, fetchBooks } from "../redux/books/booksSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { currentPage } from "../utils/currentPage";
import { PaginationComponent } from "../components/PaginationComponent/PaginationComponent";


export const Homepage = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const booksObj = useAppSelector((state: RootState) => selectAllBooks(state));
  const amountBooks = booksObj.total;
  const limit = parseInt(booksObj.total);

  const books = useAppSelector(
    (state: RootState) => selectAllBooks(state).books
  );
    
  useEffect(() => {
    const stringParams = searchParams.toString();
    if (!stringParams.length) {
      setSearchParams("page=1");
    }
  }, [searchParams]);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books]);

  const _ = currentPage(books);

  const searchValue = searchParams.get('search');

  
  return (
    <>
    { searchValue ? 
    <>
       <Title text={`'${searchValue}' SEARCH RESULTS`}/>
       <h1 className="font-bebas w-[1120px] mx-auto mt-8 text-[#A8A8A8]">Found {amountBooks} books</h1>
    </>
    : <Title text="New Releases Books"/> }      
      <div className="w-[1120px] h-[980px] mt-12 mb-20 m-auto flex flex-row flex-wrap gap-5">
        {books.slice(_.start, _.stop).map((book) => (
          <Book book={book} key={book.isbn13} />
        ))}
      </div>
      <PaginationComponent limit={limit} />
    </>
  );
};
