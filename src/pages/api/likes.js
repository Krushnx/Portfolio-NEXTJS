import { Like } from "@/lib/models";
import { connectToDB } from "@/lib/utils";

const ID = "6724b7537034d61daf93dfc5";
export default async function handler(req, res) {
    await connectToDB();

    if (req.method === "GET") {
        // Fetch the likes
        try {
            const likes = await Like.findById(ID);
            res.json({ likeCount: likes.likeCount });
        } catch (error) {
            res.json({ error: "Failed to fetch likes from backend" });
        }

    } else if (req.method === "POST") {
        // Increment the likes
        try {
            const likes = await Like.findById(ID);
            likes.likeCount += 1;
            await likes.save();
            res.json({ likeCount: likes.likeCount });
        } catch (error) {
            res.json({ error: "Failed to increment likes" });
        }
    }
}
