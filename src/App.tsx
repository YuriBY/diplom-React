import { Route, Routes } from "react-router-dom";
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Homepage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SingleBook } from "./pages/SingleBook";
import { SingleBookLayout } from "./components/SingleBookLayout/SingleBookLayout";
import { CartLayout } from "./components/CartLayout/CartLayout";
import { CartBooks } from "./pages/CartPage";
import { FavoriteBooks } from "./pages/FavoriteBooks";
import { SignInPage } from "./pages/SignInPage";

function App() {
  
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/:isbn13" element={<SingleBookLayout />}>
        <Route index element={<SingleBook />} />
      </Route>

      <Route path="/cart" element={<CartLayout />}>
        <Route index element={<CartBooks />} />
      </Route>
      <Route path="/signin" element={<CartLayout />}>
        <Route index element={<SignInPage />} />
      </Route>

      <Route path="/favorite" element={<CartLayout />}>
        <Route index element={<FavoriteBooks />} />          
      </Route>

    </Routes>
  )
}

export default App
