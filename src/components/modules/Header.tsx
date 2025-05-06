import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, color } from 'framer-motion'

import useLang from '@/src/hooks/use-lang'
import SwitchLanguage from './ChangeLang'
import { setAction } from '@/src/context/actions'
import useDispatch from '@/src/hooks/dispatcher'

import { bodyFixed, bodyUnfixed } from '@/src/hooks/dom'

import '@/src/styles/burger-animation.css'
import { cn } from '@/src/lib/utils'
import { addRef } from '@/src/context/UI'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const burgerStatus = useDispatch().burgerStatus

  const headerRef = useRef<HTMLDivElement | null>(null)

  const UI = useLang().UI

  const links = [
    { name: UI.navigation.home, path: '/' },
    { name: UI.navigation.patents, path: '/patents-research' },
    { name: UI.navigation.reviews, path: '/reviews' },
    { name: UI.navigation.story, path: '/pdf/История-X39.pdf' },
    // { name: UI.navigation.research, path: '/research' },
  ]

  const handleClickBurger = () => {
    setIsOpen(!isOpen)
    setAction({ key: 'burger', value: !isOpen })
    !isOpen ? bodyFixed() : bodyUnfixed()
  }

  const handleClickLinks = () => {
    setIsOpen(false)
    setAction({ key: 'burger', value: false })
    bodyUnfixed()
  }

  useEffect(() => {
    if (!burgerStatus.burger) {
      setIsOpen(false)
    }
  }, [burgerStatus])

  useEffect(() => {
    if (headerRef.current) {
      addRef({ id: 'header', ref: headerRef.current })
    }
  }, [headerRef.current])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='shadow-md fixed z-[49] w-[100%]'
      style={{
        backgroundColor: 'var(--header-color)',
      }}
      ref={headerRef}
    >
      <div className='mx-auto px-4 backdrop-blur-md'>
        <div className='flex items-center justify-between h-[56px]'>
          <Link
            to='/'
            className='cursor-pointer text-2xl font-bold text-[rgba(4,103,150)]'
            onClick={() => {
              if (location.pathname !== '/') {
                handleClickLinks()
              }
            }}
          >
            <div className='relative w-[200px] h-[54px] flex items-center rounded-[50px]'>
              <img
                src='/images/standart_blue.png'
                className='h-[100%] w-[54px]'
                alt=''
              />
              <img
                src='/images/22.webp'
                className='rounded-[50px] h-[80%]'
                alt=''
              />
            </div>
          </Link>
          <nav className='flex'>
            <button
              className='flex p-2 mr-1 justify-center items-center'
              onClick={() => {
                setLangOpen(true)
              }}
            >
              <SwitchLanguage
                context={langOpen}
                setContext={(context: boolean) => {
                  setLangOpen(context)
                }}
              />
            </button>
            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-5'>
              {links.map((link, index) => (
                <>
                  {link.name === UI.navigation.story ? (
                    <a
                      key={`${link.name}-${link.path}`}
                      href={link.path}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={cn(
                        'max-w-[120px] md:max-w-[260px] truncate',
                        'text-[rgba(4,103,150)] font-normal',
                        'overflow-hidden whitespace-nowrap text-ellipsis',
                        'hover:text-indigo-600 transition-colors',
                        'content-center py-2.5'
                      )}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={`${link.name}-${link.path}`}
                      to={link.path}
                      className={cn(
                        'max-w-[120px] md:max-w-[236px] truncate',
                        'overflow-hidden whitespace-nowrap text-ellipsis',
                        'text-[rgba(4,103,150)] font-normal',
                        'hover:text-indigo-600 transition-colors',
                        'content-center py-2.5',
                        'overflow-hidden',
                        'text'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => handleClickBurger()}
              className='md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
              aria-label='Toggle Menu'
            >
              {/* <Menu className="h-6 w-6 text-primary" /> */}
              <div className={`hamburger ${isOpen ? 'change' : ''}`}>
                <div className={'bar bar1 text-[rgba(4,103,150)]'}></div>
                <div className={'bar bar2 text-[rgba(4,103,150)]'}></div>
                <div className={'bar bar3 text-[rgba(4,103,150)]'}></div>
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className='backdrop-blur-md md:hidden -z-[1] absolute overflow-hidden top-[55px] left-0 right-0 shadow-lg'
              style={{
                backgroundColor: 'var(--header-color)',
              }}
            >
              <div className='mx-auto px-4 py-4 flex flex-col'>
                {links.map((link, index) => (
                  <>
                    {link.name === UI.navigation.story ? (
                      <a
                        key={11}
                        href={link.path}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary font-bold transition-colors flex justify-center py-4'
                        style={{
                          color: 'var(--main-blue)',
                          borderBottom: '1px solid rgba(100,100,100, .1)',
                        }}
                        onClick={() => handleClickLinks()}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={link.path}
                        className='hover:text-primary font-bold transition-colors flex justify-center py-4'
                        style={{
                          color: 'var(--main-blue)',
                          borderBottom: '1px solid rgba(100,100,100, .1)',
                        }}
                        onClick={() => handleClickLinks()}
                      >
                        {link.name}
                      </Link>
                    )}
                  </>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Header
