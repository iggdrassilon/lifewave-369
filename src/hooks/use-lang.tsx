import { useUnit } from 'effector-react'

import _UI from '@/public/content/UI.json'
import content from '@/public/content/content.json'
import remotes from '@/public/content/remotes.json'
import { $language } from '@/src/context/language'

const usePublic = () => {
  const lang = useUnit($language)

  const CONTENT = content[lang]
  const UI = _UI[lang]
  const LINKS = remotes

  return { lang, CONTENT, UI, LINKS }
}

export default usePublic
