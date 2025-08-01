// este es el componente principal de la aplicacion
// define las rutas principales del sitio

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
  return (
    <>
      {/* se muestra el navbar en todas las paginas */}
      <Navbar />

      {/* se definen las rutas de la aplicacion */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
