export const bodyFixed = () => {
  if (typeof document !== 'undefined') {
    const b = document.body
    if (b) {
      b.setAttribute('style', 'overflow-y: hidden;')
    }
  }
}

export const bodyUnfixed = () => {
  if (typeof document !== 'undefined') {
    const b = document.body
    if (b) {
      b.setAttribute('style', 'overflow: unset;')
    }
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}