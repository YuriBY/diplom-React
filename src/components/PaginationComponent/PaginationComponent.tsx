import { useSearchParams } from "react-router-dom";
import leftIcon from "../../assets/left.png";
import rightIcon from "../../assets/right.png";

interface PaginationComponentProps {
  limit: number;
}

export const PaginationComponent = ({ limit }: PaginationComponentProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageFromParams = searchParams.get("page");
  const currentPage = currentPageFromParams
    ? parseInt(currentPageFromParams)
    : 1;

  const maxNumberOfPages = Math.ceil(limit / 6);
  const updatePageInUrl = (newPage: number) => {
    if (newPage === 0) {
      setSearchParams({ page: "1" });
    } else if (newPage > maxNumberOfPages) {
      setSearchParams({ page: maxNumberOfPages.toString() });
    } else {
      setSearchParams({ page: newPage.toString() });
    }
  };

  return (
    <>
      <div className=" w-[1120px] h-16 m-auto grow-0 shrink-0 basis-auto flex flex-col justify-between relative">
        <div className="h-9 w-full font-helios-700 flex flex-row justify-between text-[#A8A8A8]">
          <div
            className="flex flex-row cursor-pointer"
            onClick={() => updatePageInUrl(currentPage - 1)}
          >
            <img src={leftIcon} alt="" className="w-6 h-6" />
            <p className="ml-2">Prev</p>
          </div>
          <div className="font-helios font-bols text-[#A8A8A8] cursor-pointer">
            {currentPage > 1 ? (
              <>
                <span
                  className="mx-8"
                  onClick={() => updatePageInUrl(currentPage - 1)}
                >
                  {currentPage - 1}
                </span>
                <span
                  className="mx-8 text-[#313037]"
                  onClick={() => updatePageInUrl(currentPage)}
                >
                  {currentPage}
                </span>
                <span
                  className="mx-8"
                  onClick={() => updatePageInUrl(currentPage + 1)}
                >
                  {" "}
                  {currentPage + 1 > maxNumberOfPages ? "" : currentPage + 1}
                </span>
              </>
            ) : (
              <>
                <span
                  className="mx-8 text-[#313037]"
                  onClick={() => updatePageInUrl(currentPage)}
                >
                  {currentPage}
                </span>
                <span
                  className="mx-8"
                  onClick={() => updatePageInUrl(currentPage + 1)}
                >
                  {currentPage + 1 > maxNumberOfPages ? "" : currentPage + 1}
                </span>
              </>
            )}
          </div>

          <div
            className="flex flex-row cursor-pointer"
            onClick={() => updatePageInUrl(currentPage + 1)}
          >
            <img src={rightIcon} alt="" className="w-6 h-6" />
            <p className="ml-2">Next</p>
          </div>
          <div className="absolute h-px w-full bg-[#A8A8A8] -top-6"></div>
        </div>
      </div>
    </>
  );
};
