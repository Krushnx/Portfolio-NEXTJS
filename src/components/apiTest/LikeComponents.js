"use client";

import { useEffect, useState } from "react";

const LikesComponent = () => {
    const [likes, setLikes] = useState(null);

    const fetchLikes = async () => {
        try {
            const response = await fetch("/api/likes");
            const data = await response.json();
            setLikes(data.likeCount);
        } catch (error) {
            console.error("Error fetching likes:", error);
        }
    };

    const incrementLikes = async () => {
        try {
            const response = await fetch("/api/likes", {
                method: "POST",
            });
            const data = await response.json();
            setLikes(data.likeCount);
        } catch (error) {
            console.error("Error incrementing likes:", error);
        }
    };

    useEffect(() => {
        fetchLikes();
    }, []);

    if (likes === null) return <div>Loading...</div>;

    return (
        <div>
            <h1>Likes Count: {likes}</h1>
            <button onClick={incrementLikes}>Like</button>
        </div>
    );
};

export default LikesComponent;
