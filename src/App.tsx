import { Route, Routes } from "react-router-dom";
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Homepage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SingleBook } from "./pages/SingleBook";
import { SingleBookLayout } from "./components/SingleBookLayout/SingleBookLayout";

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

      </Routes>
  )
}

export default App
