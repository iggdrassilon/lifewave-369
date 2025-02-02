import { createDomain } from "effector";
import { setLocalStorage } from "../hooks/localStorage";
import AllowedLangs from "../constants/lang";

const languageDomain = createDomain()

export const setLangEvent = languageDomain.createEvent()

export const $language = languageDomain.createStore(setLocalStorage('language', AllowedLangs.ru)).on(setLangEvent, (_, lang) => lang)
