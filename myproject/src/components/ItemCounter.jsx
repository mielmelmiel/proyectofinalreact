import React from 'react';

const ItemCount = ({
  cantidad,
  handleRestar,
  handleSumar,
  handleAgregar,
  handleRemover,
  handleVaciar,
}) => {
  return (
    <div>
      <div className='item-count'>
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <div className='botones-contador'>
        <button className='agregar-al-carrito' onClick={handleAgregar}>
          Agregar al carrito
        </button>
        <button className='agregar-al-carrito' onClick={handleRemover}>
          remover de carrito
        </button>
        <button className='agregar-al-carrito' onClick={handleVaciar}>
          vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
