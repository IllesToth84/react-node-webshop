import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import data from '../data.js';
import Product from '../models/productModel.js';
import cors from 'cors';

const productRouter = express.Router();

productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
})
);

productRouter.get(
    `/:id`,
    cors(),
     expressAsyncHandler(async (req, res) => {
         const product = await Product.findById/*(mongoose.Types.ObjectId*/(req.params.id)/*)*/;
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    },
    (req, res) => {
        console.log(req);
        console.log(res);
    }
    )
);

export default productRouter;