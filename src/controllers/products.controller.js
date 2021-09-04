import Product from '../models/Product'

export const createProduct= async(req,res)=>{
    //console.log(req.body)

    const{name,category,price,imgURL}= req.body //Para que todos tengan req.body

    const newProduct = new Product({name,category,price,imgURL}) //definimos

   const productSaved = await newProduct.save()

    res.status(201).json(productSaved)

}

export const getProducts=async(req,res)=>{
   const products = await Product.find()
   res.json(products)

}

export const getProductById= async(req,res)=>{
   const product= await Product.findById(req.params.productId)
   res.status(200).json(product)

}


export const updateProductById= async(req,res)=>{

}

export const deleteProductById= async(req,res)=>{

}