import Product from "../models/Product";
import axios from "axios";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  try {
    const newProduct = new Product({
      name,
      category,
      price,
      imgURL,
    });

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);
  res.status(200).json(product);
};

export const getProductsByArticulo = async (req, res) => { 
  const articulo = req.params.articulo;
  try {
    const { articulo } = req.params;
    const resp = await axios.get("http://192.168.1.156:8080/articulos/"+`${articulo}`);
    return res.status(200).send(resp.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  await Product.findByIdAndDelete(productId);

  // code 200 is ok too
  res.status(204).json();
};
