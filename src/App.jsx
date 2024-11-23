import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import More from "./pages/More";

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/more' element={<More />} />
      </Routes>
    </div>
  );
}
