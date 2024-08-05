import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {

  return (
    <div className='flex flex-col gap-8'>
      <SignedIn>
      <div>MR</div>
      </SignedIn>

      <SignedOut>
        <div>
        <UserButton/>
        </div>
      </SignedOut>
    </div>
  )
}

export default Home