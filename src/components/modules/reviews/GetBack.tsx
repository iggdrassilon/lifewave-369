/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/src/lib/utils'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GetBack = (content: any) => {
  const { errors, main } = content.content
  useEffect(() => {
    console.log()
  }, [])
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4'>
      <h2 className='text-2xl font-bold mb-4'>
        {errors.notFound}
      </h2>
      <p className='mb-8 text-center'>
        {errors.notExist}
      </p>
      <Link
        to='/reviews'
        className={cn(
          'px-5 py-2 transition-colors rounded-lg',
          'bg-blue-500 text-white hover:bg-blue-600'
        )}
      >
        {main.getBack}
      </Link>
    </div>
  )
}

export default GetBack
