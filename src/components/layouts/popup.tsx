/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react'

interface PopupProps {
  message: string
}
const PopupContext = createContext(null)

export const PopupProvider = ({ children }) => {
  const [popupMessage, setPopupMessage] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  const showPopup = (message: string) => {
    setPopupMessage(message)
    setIsVisible(true)

    setTimeout(() => {
      setIsVisible(false)
    }, 2222)
  }

  return (
    <PopupContext.Provider value={showPopup}>
      {children}
      {isVisible && <Popup message={popupMessage} />}
    </PopupContext.Provider>
  )
}

export const usePopup = () => {
  return useContext(PopupContext)
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        width: '200px',
        transform: 'translateX(-50%) translateY(-150%)',
        backgroundColor: 'var(--main-blue)',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  )
}
