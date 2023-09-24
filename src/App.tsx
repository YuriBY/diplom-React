import { Route, Routes } from "react-router-dom";
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Homepage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
  )
}

export default App
