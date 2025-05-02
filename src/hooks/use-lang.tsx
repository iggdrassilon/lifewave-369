/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUnit } from 'effector-react'

import _UI from '@/public/content/UI.json'
import content from '@/public/content/content.json'
// import remotes from '@/public/content/remotes.json'
import locals from '@/public/content/locals.json'
import { $language } from '@/src/context/language'
import reviewsData from '@/public/content/reviews.json'
import privacy from '@/public/content/privacy.json'
import terms from '@/public/content/terms.json'

interface PublicData {
  lang: string
  CONTENT: any
  UI: any
  LINKS: any
  REVIEWS: any
  PRIVACY: any
  TERMS: any
}

const usePublic = (): PublicData => {
  const lang = useUnit($language)

  const LINKS = locals
  // const LINKS = remotes

  const CONTENT = content[lang]
  const UI = _UI[lang]
  const REVIEWS = reviewsData['ru'].reviews
  const PRIVACY = privacy[lang].privacy
  const TERMS = terms[lang].terms

  return { lang, CONTENT, UI, LINKS, REVIEWS, PRIVACY, TERMS }
}

export default usePublic
