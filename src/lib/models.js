const { default: mongoose } = require("mongoose");


const likeSchema = new mongoose.Schema({
    likeCount : {type:Number },
   
} )


const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    tags: { type: [String], required: true },
    slug: { type: String, required: true },
    photo : {type: String},
    views: { type: Number , default: 0 , required: true},
   
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export const Like = mongoose.models.Like || mongoose.model("Like" , likeSchema);