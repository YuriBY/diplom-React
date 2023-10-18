import { Book } from "../components/Book/Book";
import { Title } from "../components/Title/Title";
import {
  selectAllBooks,
  fetchBooks,
} from "../redux/books/booksSlice";
import { selectSearchValue } from "../redux/searchValue/searchValueSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCalculateCurruntPage } from "../utils/useCalculateCurruntPage";
import { PaginationComponent } from "../components/PaginationComponent/PaginationComponent";

export const Homepage = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const booksObj = useAppSelector((state: RootState) => selectAllBooks(state));
  const mySearchValue = useAppSelector((state: RootState) =>
    selectSearchValue(state)
  );

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

  const _ = useCalculateCurruntPage(books);

  return (
    <>
      {mySearchValue ? (
        <>
          <Title text={`'${mySearchValue}' SEARCH RESULTS`} />
          <h1 className="font-bebas w-3/5 mx-auto mt-8 text-[#A8A8A8]">
            Found {amountBooks} books
          </h1>
        </>
      ) : (
        <Title text="New Releases Books" />
      )}
      <div className="w-11/12 lg:w-3/5 lg:mt-12 mb-20 m-auto flex flex-row flex-wrap justify-between">
        {books.slice(_.start, _.stop).map((book) => (
          <Link key={book.isbn13} to={`/${book.isbn13}`}>
            <Book book={book} />
          </Link>
        ))}
      </div>
      <PaginationComponent limit={limit} />
    </>
  );
};
