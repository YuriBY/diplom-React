import { Route, Routes } from "react-router-dom";
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Homepage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SingleBook } from "./pages/SingleBook";

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/:isbn13" element={<SingleBook />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
  )
}

export default App
