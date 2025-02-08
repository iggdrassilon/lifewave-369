import React, { useState, useEffect } from 'react'
import { Progress } from '@/src/components/ui/progress'
import { Loader2 } from 'lucide-react'
import { bodyFixed, bodyUnfixed } from '@/src/hooks/dom'

const LoadingOverlay = () => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load progress
    const startTime = Date.now()
    const duration = 1000

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min((elapsed / duration) * 100, 100)

      setProgress(currentProgress)

      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress)
        bodyFixed()
      } else {
        setTimeout(() => {
          setIsLoading(false)
          bodyUnfixed()
        }, 500) // Small delay before hiding
      }
    }

    requestAnimationFrame(updateProgress)

    return () => {
      setIsLoading(false)
    }
  }, [])

  if (!isLoading && progress === 100) return null

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm'>
      <Progress value={progress} className='w-[60%] h-2 mb-4' />
      <Loader2 className='h-8 w-8 animate-spin text-primary' />
      <p className='mt-2 text-sm text-muted-foreground'>
        Loading... {Math.round(progress)}%
      </p>
    </div>
  )
}

export default LoadingOverlay
