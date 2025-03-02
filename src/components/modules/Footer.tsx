import useLang from '@/src/hooks/use-lang'
import { Ref, useRef } from 'react'
import { Link } from 'react-router-dom'
import SpaceBackground from '../SpaceBackground'
import SpaceLines from '../SpaceLines'
import { useInView } from 'react-intersection-observer'

const Footer = () => {
  const UI = useLang().UI
  const footerRef = useRef(null)
  const { ref, inView } = useInView()

  const links = [
    { name: UI.footer.links.about, path: '/about' },
    { name: UI.footer.links.mission, path: '/mission' },
    { name: UI.footer.links.feedback, path: '/feedback' },
    { name: UI.footer.links.instructions, path: '/instructions' },
    { name: UI.footer.links.story, path: '/story' },
    { name: UI.footer.links.policies, path: '/policies' },
    { name: UI.footer.links.policy, path: '/privacy' },
    { name: UI.footer.links.terms, path: '/terms' },
  ]

  const socialLinks = [
    { name: UI.footer.links.telegram, url: '#' },
    { name: UI.footer.links.twitter, url: '#' },
    { name: UI.footer.links.vk, url: '#' },
    { name: UI.footer.links.rutube, url: '#' },
  ]

  const setOfRefs = (node: Element) => {
    footerRef.current = node
    ref(node)
  }

  return (
    <footer
      ref={setOfRefs}
      className='relative overflow-hidden py-12'
      style={{ filter: 'hue-rotate(-10deg)' }}
    >
      <SpaceBackground ref={footerRef} inView={inView} />
      <SpaceLines inView={inView} />
      <div className='txt-shadow-light container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* <div>
            <h3 className='text-space-dark font-bold text-lg mb-4'>
              {UI.footer.titles.quick}
            </h3>
            <ul className='space-y-2'>
              {links.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className='text-space-medium hover:text-primary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className='text-space-dark font-bold text-lg mb-4'>
              {UI.footer.titles.resources}
            </h3>
            <ul className='space-y-2'>
              {links.slice(4).map((link, index) => (
                <li 
                  key={index}
                >
                  <Link
                    to={link.path}
                    className='text-space-medium hover:text-primary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className='text-space-dark font-bold text-lg mb-4'>
              {UI.footer.titles.connect}
            </h3>
            <ul className='space-y-2'>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-space-medium hover:text-primary transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div className='md:col-start-4 md:col-end-5'>
            <h3 className='text-space-dark font-bold text-lg mb-4'>
              {UI.footer.titles.contact}
            </h3>
            <p className='text-space-medium'>
              {UI.footer.links.if_owner}
              <br />
              <a
                href={`mailto:${UI.footer.links.mail}`}
                className='text-mail underline'
              >
                {UI.footer.links.mail}
              </a>
            </p>
          </div>
        </div>

        <div className='mt-12 pt-8 text-center text-space-medium'>
          <p>
            &copy; {new Date().getFullYear()} {UI.footer.rights}{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// border-t border-space-dark
