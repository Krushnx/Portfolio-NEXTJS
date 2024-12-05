import { Blog } from "@/lib/models";
import { connectToDB } from "@/lib/utils";

export default async function handler(req, res) {
    await connectToDB();

    if (req.method === "GET") {
        if(req.query.slug){
            try {
                const blog = await Blog.findOne({ slug: req.query.slug });
                blog.views = (blog.views || 0) + 1;
                const updatedBlog = await blog.save();
                res.json(updatedBlog);
            } catch (error) {
                res.json({ error: "Failed to fetch the blog" });
            }
        }
        else if(req.query.tag){
            try {
                // Find blogs where the tags array contains the specified tag
                const blogs = await Blog.find({ tags: { $in: [req.query.tag] } });
                
                return res.status(200).json(blogs);
            } catch (error) {
                return res.status(500).json({ message: "Server error", error: error.message });
            }
        }
        else{

            // Fetch all blogs
            try {
                const blogs = await Blog.find();
                res.json(blogs);
            } catch (error) {
                res.json({ error: "Failed to fetch blogs from backend" });
            }
        }

    } else if (req.method === "POST") {
        // Create a new blog
        const { title, description, content, tags ,slug ,photo,views} = req.body;
        try {
            const blog = await Blog.create({ title, description, content, tags ,slug , photo,views});
            res.json(blog);
        } catch (error) {
            res.json({ error: "Failed to create a new blog" });
        }
    } else if (req.method === "DELETE") {
        // Delete a blog
        const { id } = req.body;
        try {
            await Blog.findByIdAndDelete(id);
            res.json({ message: "Blog deleted successfully" });
        } catch (error) {
            res.json({ error: "Failed to delete the blog" });
        }
    }
   

}