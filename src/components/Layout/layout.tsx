import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";


export const Layout = () => {
   
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <div className='grow-1 shrink-1 basis-auto w-full mx-auto'>
        <Outlet />
      </div>
      <div className="grow-0 shrink-0 basis-auto">
          <Footer/>
      </div>
      
    </div>
  );
};
