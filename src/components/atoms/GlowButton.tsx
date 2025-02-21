import { cn } from '@/src/lib/utils'
import './style.css'
import { Link } from 'react-router-dom'
import { scrollToTop } from '@/src/hooks/dom'

const GlowButton = ({message, link}: {message: string, link: string}) => {
  return (
    <Link
      to={link}
      className={cn(
        'rounded-3xl',
        'flex justify-center items-center select-none',
        'btn-glow btn-hover-shine'
      )}
      onClick={() => scrollToTop()}
    >
      {message}
    </Link>
  )
}

export default GlowButton
