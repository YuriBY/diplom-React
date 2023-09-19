import star from "../../assets/Star.png";
import whiteStar from "../../assets/Icon-Star.png";
import { SingleBook } from "../../models";

interface BookProps {
    book: SingleBook
}

export const Book = ({book} : BookProps) => {
    return (
        
            <div className="w-[352px] h-[454px] relative">
                <div className="h-[254px] bg-[#D7E4FD]">
                    <img src={ book.image } alt="" className="w-[226px] h-[264px] mx-auto"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bebas font-bold text-2xl uppercase text-[#313037] "> {book.title} </h1>
                    <h4 className=" font-helios text-[#A8A8A8] ">{book.subtitle}</h4>
                    <div className="mt-10 flex flex-row absolute bottom-0">
                        <div className="font-bebas font-bold text-2xl text-[#313037]">{book.price}</div>
                        <div className="flex flex-row gap-2 ml-40">
                            <img src={star} alt="" className="w-4 h-4 my-auto" />
                            <img src={star} alt="" className="w-4 h-4 my-auto"/>
                            <img src={star} alt="" className="w-4 h-4 my-auto"/>
                            <img src={star} alt="" className="w-4 h-4 my-auto" />
                            <img src={whiteStar} alt="" className="w-4 h-4 my-auto"/>
                        </div>

                    </div>

                </div>

            </div>

      
    )
}