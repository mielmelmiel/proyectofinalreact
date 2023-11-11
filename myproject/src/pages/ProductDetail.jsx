import React, { useState, useEffect } from 'react';
import { getProductbyId } from '../services/getProducts';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

const ProductDetail = () => {
  const productId = useParams();
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getproductsList = async () => {
    setIsLoading(true);
    const product = await getProductbyId(productId.id);
    setProducto(product);
    console.log('producto:', producto);
    setIsLoading(false);
  };

  /* useEffect for asycn-await method*/
  useEffect(() => {
    getproductsList();
  }, []);

  return (
    <>
      {isLoading && <h1>..Loading</h1>}
      <ItemDetail item={producto} />
    </>
  );
};

export default ProductDetail;
