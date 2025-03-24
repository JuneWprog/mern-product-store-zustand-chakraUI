import mongoose from "mongoose";

//The model name is 'Product'.Mongoose will:

// Convert it to lowercase → product

// Make it plural → products

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Product name is required'],
    },
  
    price: {
        type: Number,
        trim: true,
        required: [true, 'Product price is required'],
    },
  
    image: {
        type: String,
        trim: true,
        required: [true, 'Product image is required'],
    },
},
 { versionKey: false, timestamps: true}
);


const Product = mongoose.model('Product', productSchema);
export default Product;