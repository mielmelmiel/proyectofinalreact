import React from 'react';
import { toCapital } from '../utils/ToCapital';
import { useNavigate } from 'react-router-dom';

const Item = ({ producto }) => {
  const navigate = useNavigate();

  const handleProduct = () => {
    const productId = producto.id;
    navigate(`/product/${productId}`);
  };

  return (
    <div className='producto'>
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {toCapital(producto.categoria)}</p>
        <button onClick={handleProduct}> Ver más</button>
      </div>
    </div>
  );
};

export default Item;
