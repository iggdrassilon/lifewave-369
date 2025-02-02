import content from '@/public/content/content.json'
import _UI from '@/public/content/UI.json'
import { useUnit } from 'effector-react'
import { $language } from '../context/language'

const useLang = () => {
  const lang = useUnit($language)
  const CONTENT = content[lang]
  const UI = _UI[lang]
  return { lang, CONTENT, UI }
}

export default useLang
