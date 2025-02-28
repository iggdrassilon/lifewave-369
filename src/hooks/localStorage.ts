export const setLocalStorage = (value: string, defaultValue: string) => {
  let result: string
  if (typeof window !== 'undefined') {
    const part = localStorage.getItem(value)
    // console.log(part)
    result = part ? part : defaultValue
    localStorage.setItem(value, result)
  }
  if (result && typeof window !== 'undefined') {
    return result
  } else {
    return defaultValue
  }
}
