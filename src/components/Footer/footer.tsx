import { useSearchParams } from "react-router-dom";
import leftIcon from "../../assets/left.png";
import rightIcon from "../../assets/right.png";


export const Footer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPageFromParams = searchParams.get('page');
    const currentPage = currentPageFromParams ? parseInt(currentPageFromParams) : 1; // Преобразовать в число, если не null

    const updatePageInUrl = (newPage : number) => {
        if (newPage === 0) {
            setSearchParams({ page: '1' })
        } else {
            setSearchParams({ page: newPage.toString() });
        }        
    };
        
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

                <div className="h-2/5 w-full border-solid border-2 bg-[#F4EEFD] px-8">
                    <h1 className=" font-bebas-700 text-3xl pt-8">SUBSCRIBE TO NEWSLETTER</h1>
                    <h4 className=" font-dinpro text-lg text-[#A8A8A8]">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</h4>
                    <input type="email" placeholder="Your email" className="w-4/5 h-7 px-4 font-dinpro" />
                    <button className=" font-bebas-700 h-7 w-1/5 bg-black text-white">SUBCRIBE</button>
                </div>
                
                <div className="h-12 w-full flex flex-row justify-between items-center text-[#A8A8A8] font-helios relative">
                    <div>©2022 Bookstore</div>
                    <div>All rights reserved</div>
                    <div className="absolute h-px w-full bg-[#A8A8A8] top-1/4"></div>
                </div>
            </div>
            
        
        </>
        
        
    )
}