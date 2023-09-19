import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Outlet } from "react-router-dom";


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
