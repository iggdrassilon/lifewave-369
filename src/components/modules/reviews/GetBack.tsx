/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/src/lib/utils'
import { Link } from 'react-router-dom'

const GetBack = (content: any) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4'>
        <h2 className='text-2xl font-bold mb-4'>
          {content.errors.notFound}
        </h2>
        <p className='mb-8 text-center'>
          {content.errors.notExist}
        </p>
        <Link
          to='/reviews'
          className={cn(
            'px-5 py-2 transition-colors rounded-lg',
            'bg-blue-500 text-white hover:bg-blue-600'
          )}
        >
          {content.main.getBack}
        </Link>
      </div>
  )
}

export default GetBack
