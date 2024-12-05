'use client'

import { useEffect, useState } from "react";

const RadailGradent = () => {

    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
            const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
            setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }



    }, [])


    const gradientStyle = {
        backgroundImage: `radial-gradient(600px at ${mousePosition.x}% ${mousePosition.y}% , rgba(29, 78, 216, 0.11), transparent 80% )`,
        position: 'absolute',
        top: 0, left: 0,
        width: '100vw',
         height: '100%',
         zIndex : '0'
    }
    return (
        <div style={gradientStyle} className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
    );
}

export default RadailGradent;