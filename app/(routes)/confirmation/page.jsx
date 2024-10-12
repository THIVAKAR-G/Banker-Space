import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function Confirmation() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 p-20 bg-gray-50 rounded-lg shadow-lg'>
      {/* Use an iframe to embed the Lottie animation from the provided URL */}
      <iframe
        src="https://lottie.host/embed/02e57fc1-8731-4a32-99c7-c563514efc8b/WAJCiwYWeM.json"
        width="200" // Adjust width as needed
        height="200" // Adjust height as needed
        style={{ border: 'none' }} // Remove border if necessary
        title="Meeting Confirmation Animation"
      ></iframe>
      
      <h2 className='font-bold text-4xl text-gray-800 text-center'>
        Your Meeting Has Been Successfully Scheduled!
      </h2>
      <p className='text-lg text-gray-600 text-center'>
        A confirmation email has been sent to you!.
      </p>
      <Link href={'/'}>
        <Button className='bg-green-500 hover:bg-green-600 transition duration-200'>
          Thank You
        </Button>
      </Link>
    </div>
  );
}

export default Confirmation;
