/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'

import AllowedLangs from '@/src/constants/lang'

import { setLangEvent } from '@/src/context/language'

import OverlayModal from './overlays/OverlayModals'

import styled, { css } from 'styled-components'
import { ModalsStateT } from '@/src/types/modals'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwitchLanguage = ({
  context,
  setContext
}: {
  context: boolean,
  setContext: (c: boolean) => void
}) => {
  const timeRealeses = 0.1 // second
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const [active, setActive] = useState<ModalsStateT>({
    modal: false,
    overlay: false
  })

  const openEvent = () => {
    if (context) {
      setActive((prev) => ({
        ...prev,
        modal: true,
        overlay: true,
      }))
    }
  }

  const closeEvent = () => {
    setActive((prev) => ({...prev, modal: false}))
    timeout.current = setTimeout(() => {
      setActive((prev) => ({...prev, overlay: false}))
      setContext(false)
    }, timeRealeses * 1000 + 0.01)
  }

  useEffect(() => {
    openEvent()
  }, [context])

  return (
    <div className="switch-wrapper w-6 h-6 relative">
      <Switcher><svg fill='var(--main-blue)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 18c.335 0 1.121-.296 1.941-1.859.318-.604.595-1.326.812-2.141H9.247c.217.815.494 1.537.812 2.141C10.879 19.704 11.665 20 12 20zm-3.132-6a16.802 16.802 0 01-.118-2c0-.695.041-1.364.118-2h6.264c.077.636.118 1.305.118 2 0 .695-.041 1.364-.118 2H8.868zm7.945 2c-.267 1.164-.647 2.212-1.113 3.095A8.037 8.037 0 0018.93 16h-2.117zm2.935-2h-2.603a18.912 18.912 0 000-4h2.603c.165.64.252 1.31.252 2s-.087 1.36-.252 2zM6.855 14H4.252A8.014 8.014 0 014 12c0-.69.088-1.36.252-2h2.603a18.893 18.893 0 000 4zM5.07 16h2.117c.267 1.164.647 2.212 1.113 3.095A8.036 8.036 0 015.07 16zm4.177-8h5.506a10.376 10.376 0 00-.812-2.141C13.121 4.296 12.335 4 12 4c-.335 0-1.121.296-1.941 1.859A10.375 10.375 0 009.247 8zm7.566 0h2.117a8.037 8.037 0 00-3.23-3.095c.466.883.846 1.931 1.113 3.095zM8.3 4.905C7.834 5.788 7.454 6.836 7.187 8H5.07A8.037 8.037 0 018.3 4.905z"></path></svg></Switcher>
      {active.modal && (
        <Wrapper>
          <Select
            onClick={() => {
              closeEvent()
              setLangEvent(AllowedLangs.ru)
            }}
          >
            <Icon $content='ru' />
            <Selector className='article-reset'>Русский</Selector>
          </Select>
          <Select
            onClick={() => {
              closeEvent()
              setLangEvent(AllowedLangs.en)
            }}
          >
            <Icon $content='eng' />
            <Selector className='article-reset'>English</Selector>
          </Select>
        </Wrapper>
      )}
      {active.overlay && (
        <OverlayModal
          closeEvent={() => closeEvent()}
          holder={active.modal} // context for start rise & down overlay
          context={'language'}
          timeRealeses={timeRealeses}
        />
      )}
    </div>
  )
}

export default SwitchLanguage

const Wrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 15px;
  top: 40px;
  right: 0;
  background-color: rgba(250,250,250, .5);
  backdrop-filter: blur(4px);
`

const Select = styled.li`
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: var(--color-header-btn-hover);
  }
`

const Icon = styled.a<{ $content: string }>`
  ${(props) => css`
    display: flex;
    width: 30px;
    height: 20px;
    padding: 0 0.2rem;
    &:before {
      content: '';
      width: 30px;
      height: 20px;
    }
    ${props.$content === 'ru' &&
    css`
      &:before {
        content: url('/icons/Rus.svg');
      }
    `}
    ${props.$content === 'eng' &&
    css`
      &:before {
        content: url('/icons/Eng.svg');
      }
    `}
  `}
`

const Selector = styled.a`
  display: flex;
  color: black;
  font-size: var(--font-language-modal);
  font-weight: var(--font-weight-language-modal);
`

const Switcher = styled.a`
  cursor: pointer;
  width: 30px;
  height: 30px;
`