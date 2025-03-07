import { useState, useEffect } from "react"
import Dexie from 'dexie'

const db = new Dexie('CacheDB')
db.version(1).stores({
  files: 'url, type, data',
})

type CacheFileType = 'video' | 'image' | 'other'

const useCache = (url: string, type: CacheFileType, viewed: boolean) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null)

  const deleteOldUrl = (urlObject: string | null): void => {
    if (urlObject) {
      URL.revokeObjectURL(urlObject)
    }
  }

  useEffect(() => {
    let oldBlobUrl: string | null = null

    const cacheFile = async () => {
      try {
        const cachedFile = await db.table('files').get({ url, type })
        if (cachedFile) {
          if (oldBlobUrl) {
            deleteOldUrl(oldBlobUrl)
          }

          const blobUrl = URL.createObjectURL(cachedFile.data)
          
          console.log(`return cached file ${url} type ${type}`)

          setBlobUrl(blobUrl)
          oldBlobUrl = blobUrl
        } else {
          if (oldBlobUrl) {
            deleteOldUrl(oldBlobUrl)
          }

          console.log(`request file ${url} type ${type}`)

          const response = await fetch(url)
          const fileBlob = await response.blob()

          await db.table('files').put({ url, type, data: fileBlob })
          const blobUrl = URL.createObjectURL(fileBlob)

          setBlobUrl(blobUrl)
          oldBlobUrl = blobUrl
        }
      } catch (error) {
        console.error(`Error caching the ${type}:`, error)
      }
    }

    if (url && viewed) {
      cacheFile()
    }

    return () => {
      if (oldBlobUrl) {
        URL.revokeObjectURL(oldBlobUrl)
      }
    }
  }, [url, type, viewed])

  return blobUrl
}

export default useCache
