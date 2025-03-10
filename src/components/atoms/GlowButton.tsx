import { cn } from '@/src/lib/utils'
import './style.css'
import { Link } from 'react-router-dom'
import { scrollToTop } from '@/src/hooks/dom'

type GlowButtonT = {
  message: string;
  link: string;
  style: string;
}

const GlowButton = ({message, link, style}: GlowButtonT) => {
  return (
    <Link
      to={link}
      className={cn(
        `${style}`,
        'rounded-3xl min-w-[333px]',
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
