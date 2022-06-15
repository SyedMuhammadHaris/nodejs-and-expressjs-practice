const express = require('express');
const app = express();

const { products } = require('./data');


app.get('/', (req, res) => {

  res.send('<h1>Home Page </h1> <a href="/api/products">Products API</a>');
});

app.get('/api/products', (req, res) => {
  //    res.json(products);
  const newProducts = products.map((product) => {
    const { name, id, image } = product;
    return { name, id, image };
  })
  res.json(newProducts);

});


//Route Parameters /:usesrs and http://localhost:5000/api/products/1
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  console.log(req.params);
  const singleProduct = products.find((product) =>
    product.id === Number(productID)
  )

  if (!singleProduct) {
    res.status(404).send('404 We cannot find the resource');
  }
  res.json(singleProduct);

});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
});

//Query String http://localhost:5000/api/v1/query?search=a&limit=1

app.get('/api/v1/query', (req, res) => {
  //  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is  listening");
});