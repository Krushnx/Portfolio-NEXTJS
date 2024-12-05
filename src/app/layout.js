import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/navbar/Navbar";
import MainFooter from "@/components/footer/MainFooter";
import Footer from "@/components/footer/Footer";


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
       
        <Navbar />
        {children}
      
      </body>
    </html>
  );
}
