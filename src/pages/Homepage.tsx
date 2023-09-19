import { Book } from "../components/Book/book";
import { Title } from "../components/Title/title";
import { selectAllBooks } from "../redux/books/booksSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchBooks } from "../redux/books/booksSlice";

export const Homepage = () => {
  const dispatch = useAppDispatch();
  const booksObj = useAppSelector((state: RootState) => selectAllBooks(state));
  const books = useAppSelector(
    (state: RootState) => selectAllBooks(state).books
  );

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books]);

  return (
    <>
      <Title text="New Releases Books" />
      <div className="w-[1120px] h-[1960px] mt-12 mb-20 m-auto flex flex-row flex-wrap gap-5">
        {books.map((book) => (
          <Book book={book} key={book.isbn13} />
        ))}
      </div>
    </>
  );
};
