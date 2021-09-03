import Product from '../models/Product'

export const createProduct= async(req,res)=>{
    //console.log(req.body)

    const{name,category,price,imgURL}= req.body //Para que todos tengan req.body

    const newProduct = new Product({name,category,price,imgURL}) //definimos

   const productSaved = await newProduct.save()

    res.status(201).json(productSaved)

}

export const getProducts=(req,res)=>{
    res.json("get products")

}

export const getProductById=(req,res)=>{

}


export const updateProductById=(req,res)=>{

}

export const deleteProductById=(req,res)=>{

}