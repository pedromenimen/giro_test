import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Result from '../pages/result';
import Simulation from '../pages/simulation';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/simulation' element={<Simulation />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
