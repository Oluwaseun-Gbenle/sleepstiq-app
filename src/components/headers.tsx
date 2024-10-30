"use client";
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Headers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/shop', label: 'Shop' },
        { href: '/faqs', label: 'FAQs' },
      ];

      const navigateTo = (href: string) => {
        router.push(href);
    };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent flex mx-10 sm:mx-0 flex-row-reverse justify-between sm:justify-normal sm:flex-row py-5">
        <div className='sm:mx-36'>
            <Image 
            src={"/images/logo.png"}
            alt="logo"
            width={92}
            height={62}
            />
        </div>
        <nav className='mt-1'>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            <Image
            src="/svg/hamburger-menu.svg"
            alt="menu-icon"
            height={24}
            width={24}
            />
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row md:gap-24 text-[18px] text-[#12305B] ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`mt-2 md:mt-0 hover:text-[#0d83aa] ${
              pathname === link.href ? 'font-bold' : ''
            }`}
            onClick={() => navigateTo(link.href)}
          >
            {link.label}
          </a>
        ))}

        </div>
      </nav>
    </div>
  )
}

export default Headers