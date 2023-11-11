export const getProducts = async () => {
  try {
    const data = await fetch('/src/mokup/products.json');
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductbyId = async (id) => {
  try {
    const data = await fetch('/src/mokup/products.json');
    const jsonData = await data.json();
    console.log(id);
    const item = jsonData.find((product) => product.id === parseInt(id));
    console.log(jsonData);
    return item;
  } catch (err) {
    throw new Error(err);
  }
};

//...........................................................................

/*using JS Promise*/

// export const getProducts = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 500);
//     console.log(products);
//   });
// };

// export const getProductbyId = (id) => {
//   return new Promise((resolve, reject) => {
//     const item = products.find((product) => product.id === id);

//     if (item) {
//       resolve(item);
//     } else {
//       reject({
//         error: 'No se encontró el producto',
//       });
//     }
//   });
// };

//...........................................................................

/*fetch datatusing asycn- await method*/
