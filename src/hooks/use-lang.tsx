import { useUnit } from 'effector-react'

import _UI from '@/public/content/UI.json'
import content from '@/public/content/content.json'
// import remotes from '@/public/content/remotes.json'
import locals from '@/public/content/locals.json'
import { $language } from '@/src/context/language'
import reviewsData from '@/public/content/reviews.json'

const usePublic = () => {
  const lang = useUnit($language)

  const LINKS = locals
  // const LINKS = remotes

  const CONTENT = content[lang]
  const UI = _UI[lang]
  const REVIEWS = reviewsData[lang].reviews

  return { lang, CONTENT, UI, LINKS, REVIEWS }
}

export default usePublic
