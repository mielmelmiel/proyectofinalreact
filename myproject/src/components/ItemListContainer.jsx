import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/getProducts';
import data from '../mokup/products.json';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState('Productos');

  const getproductsList = async () => {
    // setIsLoading(true);
    // console.log('isLoading:', isLoading);
    const products = await getProducts();
    setProductos(products);
    // setIsLoading(false);
  };

  /* useEffect for asycn-await method*/
  useEffect(() => {
    getproductsList();
  }, []);

  /* useEffect for using JS Promise*/

  // useEffect(() => {
  //   const products = getProducts().then((resp) => {
  //     setProductos({ ...resp, products });
  //   });
  // }, []);

  return <div>{<ItemList productos={productos} titulo={titulo} />}</div>;
};

export default ItemListContainer;
