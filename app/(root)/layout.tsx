

import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import Link from 'next/link';


const Layout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='root'>
      <SignedIn>
        <div>Mukul</div>
      </SignedIn>
      <SignedOut>
        <div className='min-h-screen flex bg-black text-white w-[100%]'>
        <Link href='/sign-in'>
              Login | Signup
            </Link>
        </div>
      </SignedOut>
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout