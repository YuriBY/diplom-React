import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

export const CartLayout = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="grow-1 shrink-1 basis-auto w-full mx-auto">
        <Outlet />
      </div>

      <div className="w-11/12 lg:w-3/5 lg:h-12 m-auto grow-0 shrink-0 basis-auto relative">
        <div className="w-full md:w-11/12 flex flex-col md:flex-row lg:flex-row justify-between text-[#A8A8A8] font-helios">
          <div className="mt-12 md:mt-4 text-center">©2022 Bookstore</div>
          <div className="mt-4 text-center">All rights reserved</div>
        </div>
        <div className="absolute h-px w-full bg-[#E7E7E7] top-0"></div>
      </div>
    </div>
  );
};
