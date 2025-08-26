import Product from "../models/product.model.js";

const getProducts = async (req, res) =>{
    try {
        const products = await Product.getAll();
        res.status(200).json({
            status : "success",
            message : "Fetched All Products",
            data : products,
            statusCode : 200
        });

    } catch (error) {
        console.error("Get Products Error: ", error);
        res.status(500).json({
            status : "error",
            message : "Internal Server Error",
            error : error.message,
            statusCode : 500,
        });
    }
}

const getProduct = async (req, res)=> {
    try {
        
        const product = await Product.getById(req.params.id);
        if(!product) {
            return res.status(404).json({
                message : " Product Id not found"
            });
        }

        res.status(200).json({
            status : "success",
            message : "Fetch by Id product",
            data : product,
            statusCode : 200,
        });

    } catch (error) {
        console.error("Get Product By Id Error", error);
        res.status(500).json({
            status : "error",
            message : "Internal Sercer Error",
            error : error.message,
            statusCode : 500,
        });
    }
}

const Createproduct = async (req, res) => {
    try {
        
        const { name, price } = req.body;
        const product = await Product.create(name, price);
        
        res.status(200).json({
            status : "success",
            message : "Product Added Successfully!...",
            data : product,
            statusCode : 200,
        });

    } catch (error) {
        console.error("Create Product Error: ", error);
        return res.status(500).json({
            status : "error",
            message : "Internal Server Error",
            error : error.message,
            statusCode : 500
        });
    }
}

const UpdateProduct = async (req, res) => {
    try {
        
        const {name, price} = req.body;
        const product = await Product.update(req.params.id, name, price);

        res.status(200).json({
            status : "success",
            message : "Product Updated Successfully!..",
            data : product,
            statusCode : 200,
        });

    } catch (error) {
        console.error("Update Prodcut Error : ", error);
        return res.status(500).json({
            status : "error",
            message : "Internal Server Error",
            error : error.message,
            statusCode : 500,
        })
    }
}

const DeleteProduct = async (req, res) => {
    try {
       const DeleteProduct = await Product.remove(req.params.id);
       res.status(200).json({
        status : "success",
        message : "Product Deleted Successfully!..",
        data : DeleteProduct,
        statusCode : 200,
       }) 
    } catch (error) {
        console.error("Delete Product Error: ", error);
        res.status(500).json({
            status : "error",
            message : "Internal Server Error",
            error : error.message,
            statusCode : 500,
        });
    }
}

export default {
    getProducts,
    getProduct,
    Createproduct,
    UpdateProduct,
    DeleteProduct
}