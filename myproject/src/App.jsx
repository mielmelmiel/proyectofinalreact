import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';

function App() {
  const DashBoard = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashBoard />,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/product/:id',
          element: <ProductDetail />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/carrito',
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div>
      <CartProvider>
        <div className='app'>
          <RouterProvider router={router} />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
