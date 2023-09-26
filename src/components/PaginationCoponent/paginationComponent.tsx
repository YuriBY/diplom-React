import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import leftIcon from "../../assets/left.png";
import rightIcon from "../../assets/right.png";

interface PaginationProps {
    allPagesCount: number;
    currentPage?: number;
    updatePageInUrl?: (pageNumber: number) => void;
}

const generateNumbersArrayByLimits = (limit: number) => {
    const numberArray: number[] = [];
    const numberPagesForPagination = Math.ceil(limit / 6);
    for (let i = 1; i <= numberPagesForPagination; i++) {
      numberArray.push(i);
    }
    return numberArray;
  };

export const Pagination =  React.memo(
    ({
      allPagesCount,
      updatePageInUrl,
      currentPage,
    }: PaginationProps) => {
      const pageArray = useMemo(
        () => generateNumbersArrayByLimits(allPagesCount),
        [allPagesCount]
      );
    return (
        <>
            <div className=" w-[1120px] h-96 m-auto grow-0 shrink-0 basis-auto flex flex-col justify-between relative">
                <div className="h-9 w-full font-helios-700 flex flex-row justify-between text-[#A8A8A8]">
                    <div className="flex flex-row cursor-pointer" onClick={() => updatePageInUrl(currentPage - 1)}>
                        <img src={leftIcon} alt="" className="w-6 h-6" />
                        <p className="ml-2">Prev</p>
                    </div>
                    <div className="font-helios font-bols text-[#A8A8A8] cursor-pointer">
                        {currentPage > 1 ? 
                            <>
                            <span className="mx-8" onClick={() => updatePageInUrl(currentPage - 1)}>{currentPage - 1}</span>
                            <span className="mx-8 text-[#313037]" onClick={() => updatePageInUrl(currentPage)}>{currentPage}</span>
                            <span className="mx-8" onClick={() => updatePageInUrl(currentPage + 1)}>{currentPage + 1}</span>
                            </>                                 
                            :
                            <>
                            <span className="mx-8 text-[#313037]" onClick={() => updatePageInUrl(currentPage)}>{currentPage}</span>
                            <span className="mx-8" onClick={() => updatePageInUrl(currentPage + 1)}>{currentPage + 1}</span>
                            </>
                        }
                    
                    </div>
                    
                    <div className="flex flex-row cursor-pointer" onClick={() => updatePageInUrl(currentPage + 1)}>
                        <img src={rightIcon} alt="" className="w-6 h-6"/>
                        <p className="ml-2">Next</p>
                    </div>
                <div className="absolute h-px w-full bg-[#A8A8A8] -top-6"></div>
                
                </div>                
            </div>
                   
        </>                
    )
}
);