import { Button } from "../Button/Button";
import { Input } from "../Input/Input";


interface FooterProps {
  children?: React.ReactNode;
}

export const Footer = ({children} : FooterProps) => {
  return (
    <>
      <div className=" w-[1120px] h-80 m-auto grow-0 shrink-0 basis-auto justify-between relative">
        <div className="h-3/5 w-full border-solid border-2 bg-[#F4EEFD] px-8">
          <h1 className=" font-bebas-700 text-3xl pt-8">
            SUBSCRIBE TO NEWSLETTER
          </h1>
          <h4 className=" font-dinpro text-lg text-[#A8A8A8]">
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </h4>
          <div className="flex flex-row">
            <Input placeholder="Your email" mode="withoutBorder" className="w-4/5 h-14 px-4 font-dinpro"/>
            <div className="bg-[#313037] hover:bg-[#5B5A62] text-white font-bebas font-bold text-lg w-[147px] h-14 text-center py-3" >
              <Button value={'SUBSCRIBE'}/>
            </div>            
          </div>         
        </div>
        {children}
        <div className="h-12 w-full flex flex-row justify-between items-center text-[#A8A8A8] font-helios relative mt-16">
          <div className="mt-12">©2022 Bookstore</div>
          <div className="mt-12">All rights reserved</div>
          <div className="absolute h-px w-full bg-[#A8A8A8] top-4/5"></div>
        </div>
      </div>
    </>
  );
};
