import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar/Navbar";
import RadailGradent from "@/components/RadialGradient";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});

export const metadata = {
  title: "Krushna Nagare",
  description: "My self Krushna Nagare, This is my Personal portfolio built on Next.js. I am IT Grad(2024) from PES Modern College of engineering, Pune. I am currently working as Software Developer Trainee at Bitwise Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="google-site-verification" content="hB07rJCT5tBg4L4ehbEQldA8MZ02thNuTwG5B-K1eHQ" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <div className="HideCursor">
          <AnimatedCursor
            color='255, 255, 255'
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.4}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "skyblue"
            }}
            outerStyle={{
              border: `3px solid white`
            }}
            clickables={["a", "button", "select", "input", ".link"]}
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
