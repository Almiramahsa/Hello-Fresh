import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
       
        </Routes>
    </BrowserRouter>
  );
};

export default App;