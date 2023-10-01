import star from "../../assets/Star.png";
import whiteStar from "../../assets/Icon-Star.png";
import { SingleBook } from "../../models";
import { useMemo } from "react";


const colorList = ['bg-[#D7E4FD]', 'bg-[#CAEFF0]', 'bg-[#F4EEFD]', 'bg-[#FEE9E2]'];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

interface BookProps {
    book: SingleBook
}

export const Book = ({book} : BookProps) => {
    const randomClassColor = useMemo(() => colorList[getRandomInt(4)], [])
    return (
        
            <div className="w-full mt-12 lg:mt-0 md:w-[328px] lg:w-[352px] h-[454px] relative">
                <div className={`h-[254px] ${randomClassColor}`}>
                    <img src={ book.image } alt="" className="w-[226px] h-[264px] mx-auto"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bebas font-bold text-2xl uppercase text-[#313037] "> {book.title} </h1>
                    <h4 className=" font-helios text-[#A8A8A8] ">{book.subtitle}</h4>
                    <div className="mt-10 flex flex-row absolute bottom-0">
                        <div className="font-bebas font-bold text-2xl text-[#313037]">{book.price}</div>
                        <div className="flex flex-row gap-2 ml-20 lg:ml-40">
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