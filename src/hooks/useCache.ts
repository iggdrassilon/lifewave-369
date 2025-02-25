// useCache.js
import { useState, useEffect } from'react'
import { Dexie } from 'dexie'

const db = new Dexie('CacheDB')
db.version(13).stores({
  files: 'url, data, blobUrl',
})

const useCache = (url: string, fileType: string, format: string) => {
  const [blobUrl, setBlobUrl] = useState(null)

  const cacheFile = async () => {
    try {
      const cachedFile = await db.table('files').get(url)
      if (cachedFile) {
        const blob = new Blob([cachedFile.data], { type: format })
        const blobUrl = URL.createObjectURL(blob)
        setBlobUrl(blobUrl)
      } else {
        const response = await fetch(url)
        const blob = await response.blob()
        await db.table('files').put({ url, data: blob })
        const blobUrl = URL.createObjectURL(blob)
        setBlobUrl(blobUrl)
      }
    } catch (error) {
      console.error(`Error caching the ${fileType}:`, error)
    }
  }

  useEffect(() => {
    cacheFile()
  }, [url, fileType])

  return blobUrl
}

export default useCache