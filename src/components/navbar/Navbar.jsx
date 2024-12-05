'use client'
import { useState } from 'react';
import './module.navbar.css';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if(!isOpen){

      document.body.classList.add('hideOverflow');
    }
    if(isOpen)
      {
        
        document.body.classList.remove('hideOverflow');
      }
  };

  return (
    <div className='header'>
      <div className="blob-my"></div>
      <div className="navbar text-white flex justify-between align-center items-center p-6">
        <Link href="/">
          <div className="logo flex items-center">
            <Image alt='logo' src={'/logo/white.png'} width={50} height={50}/>
            <p className='flex font-bold myname text-[28px]'>&nbsp;{'<'}&nbsp;Krushna &nbsp; <span className='md:block hidden' >Nagare&nbsp; </span> {'/>'}</p>
          </div>
        </Link>
        <div className="md:hidden toggle">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block  navbaritems`}>
          <Link href="/" className='mx-6 navlink'> <span>{'</>'} &nbsp;</span> Home<span> &nbsp;{''}</span></Link>
          <Link href="/about" className='mx-6 navlink'>About Me</Link>
          <Link href="/work" className='mx-6 navlink'>Work</Link>
          <Link href="/blog" className='mx-6 navlink'>Blog</Link>
          <Link href="/" className='mx-6 navlink z-10'>Testimonials</Link>
          <Link href="/contact" className='mx-6 navlink z-10'>Contact</Link>
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
