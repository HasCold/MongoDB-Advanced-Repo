const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1/shop";

mongoose.connect(uri);

const productSchema = new mongoose.Schema({
    name: String,
    company: {type: String, unqiue: true}, 
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean
})

const productModel = new mongoose.model("Product", productSchema);

const main = async () => { 
    try {
        await productModel.findOneAndUpdate({"products.title": "Sleeve Shirt Womens"}, {$set: {"products.$.title": "Womens Fashion Design Shirts" } })
        
        // const data = await productModel.find({price: {$gte: 200}, id: {$ne: "2139"} }).limit(2).skip(1).sort({id: 1}) 
        const data = await productModel.find({"products.title": {$eq: "Womens Fashion Design Shirts"} })
        console.log(data);

    } catch (error) {       
        console.warn(error);
    }finally{
      mongoose.connection.close();
    }
}

main();