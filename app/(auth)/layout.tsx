import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=> {
  return (
    <main className='flex-center min-h-screen w-full bg-neutral-900'>
      {children}
    </main>
  )
}

export default layout