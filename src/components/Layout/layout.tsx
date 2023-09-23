import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";


export const Layout = () => {
   
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow w-full mx-auto'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
