"use client"
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20 px-4 lg:px-0">
      {/* Decorative profile images */}
      <div className="hidden lg:block">
        <Image src="/profile1.png" width={100} height={100} 
          className="h-[100px] object-cover rounded-full absolute right-36" 
          alt="profile image 1" />
        <Image src="/profile3.png" width={100} height={100} 
          className="h-[100px] object-cover rounded-full absolute top-48 left-16" 
          alt="profile image 2" />
        <Image src="/profile2.png" width={100} height={100} 
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36" 
          alt="profile image 3" />
        <Image src="/profile2.png" width={100} height={100} 
          className="h-[100px] object-cover rounded-full absolute right-16 bottom-32" 
          alt="profile image 4" />
      </div>

      {/* Main text content */}
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[36px] lg:text-[60px] text-slate-700 leading-tight">
          Easy Scheduling Ahead
        </h2>
        <p className="text-lg lg:text-xl mt-5 text-slate-500">
          Scheduly is your scheduling automation platform for eliminating the back-and-forth emails 
          to find the perfect time — and so much more.
        </p>

        {/* Signup options */}
        <div className="flex flex-col mt-8 gap-4">
          <h3 className="text-sm lg:text-base text-slate-600">
            Sign up free with Google and Facebook
          </h3>

          {/* Google and Facebook buttons */}
          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
            <LoginLink>
              <Button className="p-5 lg:p-7 flex items-center justify-center gap-4 w-full lg:w-auto rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                <Image src="/google.png" alt="google" width={24} height={24} />
                Sign up with Google
              </Button>
            </LoginLink>
            <LoginLink>
              <Button className="p-5 lg:p-7 flex items-center justify-center gap-4 w-full lg:w-auto rounded-md bg-blue-800 hover:bg-blue-900 text-white">
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                Sign up with Facebook
              </Button>
            </LoginLink>
          </div>

          <hr className="my-6 w-full" />

          {/* Email signup link */}
          <LoginLink>
            <p className="text-sm lg:text-base text-primary">
              <span className="font-bold">Sign up Free with Email</span>. No credit card required.
            </p>
          </LoginLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
