import { useSearchParams } from "react-router-dom";
import { SingleBook } from "../models";

export const useCalculateCurruntPage = (books: SingleBook[]) => {
    const [searchParams] = useSearchParams();
    const currentPageFromParams = searchParams.get("page");
    if (currentPageFromParams) {
      const start = (parseInt(currentPageFromParams) - 1) * 6;
      const stop = start + 6;
      const startInBounds = Math.max(start, 0);
      const stopInBounds = Math.min(stop, books.length);

      return {
        currentPage: parseInt(currentPageFromParams),
        start: startInBounds,
        stop: stopInBounds,
      };
    } else {
      return {
        currentPage: 1,
        start: 0,
        stop: 6,
      };
    }
  };