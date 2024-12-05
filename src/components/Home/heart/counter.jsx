'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Counter = () => {
  const [likes, setLikes] = useState(null);
  const [count, setCount] = useState(0);

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


  useEffect(() => {
    const savedCount = sessionStorage.getItem('count');
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    if (count >= 5) {
      setCount(5);
      return;
    }
    setCount(count + 1);
    incrementLikes();
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <p>Likes: {likes}</p>

      <div className="relative w-[100px] h-[100px]  mr-[50px]  mb-[10px] " onClick={increment} >
        <Image
          src={`/heart/${count}.png`}
          alt="Description of the image"
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container while maintaining aspect ratio
        />
      </div>
     
    </div>
  );
};

export default Counter;
