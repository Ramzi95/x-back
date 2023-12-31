const mongoose =require("mongoose")
const productSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Too short product title'],
        maxlength: [100, 'Too long product title'],
      },
      
      description: {
        type: String,
        required: [true, 'Product description is required'],
        minlength: [20, 'Too short product description'],
      },
      quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
      },
      sold: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        required: [true, 'Product price is required'],
        trim: true,
        max: [200000, 'Too long product price'],
      },
      priceAfterDiscount: {
        type: Number,
      },
      
      colors: [String],
  
      imageCover: {
        type: String,
        required: [true, 'Product Image cover is required'],
      },
      images: [String],
      
      category: {
        type: mongoose.Schema.ObjectId,
        ref: 'category',
        
      },
      subcategory: 
        {
          type: mongoose.Schema.ObjectId,
          ref: 'subcategory',
          required: [true, 'Product must be belong to subcategory'],
        },
    
      
      ratingsAverage: {
        type: Number,
        default:5,
        min: [1, 'Rating must be above or equal 1.0'],
        max: [5, 'Rating must be below or equal 5.0'],
        // set: (val) => Math.round(val * 10) / 10, // 3.3333 * 10 => 33.333 => 33 => 3.3
      },
      ratingsQuantity: {
        type: Number,
        default: 0,
      } 
      ,

      ratings:[
        {
          _id:String,
          user:String,
          rate:Number,
          date:Number,
          
        }
      ],

      comments:[
        {
          _id:String,
          user:String,
          comment:String,
          date:Number
        }
      ],

    },
    
      {timestamps: true
    }
  );
module.exports=mongoose.model('product',productSchema)