"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex items-center justify-between p-5 shadow-sm'>
        {/* Logo */}
        <Image 
          src='/logo.png' 
          width={100} 
          height={100} 
          alt='logo'
          className='w-[150px] md:w-[200px]' 
        />

        {/* Navigation Links (hidden on mobile) */}
        <ul className='hidden md:flex gap-14 font-medium text-lg'>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact us</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
        </ul>

        {/* Buttons */}
        <div className='flex gap-5'>
          {/* Disable Login button on mobile */}
          <LoginLink>
            <Button variant="ghost" className="hidden md:block">
              Login
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button className='text-sm md:text-base'>
              Get Started
            </Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
