import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Simulation from '../pages/simulation';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/simulation' element={<Simulation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
