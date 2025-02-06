import React from 'react'
import { motion } from 'framer-motion'

interface DnaHeaderProps {
  title: string
}

const DnaHeader = ({ title }: DnaHeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='bg-space-dark text-white py-24'
    >
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center'>{title}</h1>
      </div>
    </motion.header>
  )
}

export default DnaHeader
