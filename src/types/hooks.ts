/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export type MotionHookT = {
  children: React.ReactElement
  duration: number
  delay: number
}

export type MotionSectionT = {
  children: React.ReactElement
  duration: number
  delay: number
  height_initial: number
  height_viewported: number
  once: boolean
  className: string
}

export type MotionTextT = {
  children: React.ReactElement
  duration: number
  delay: number
  height_initial: number
  height_viewported: number
  once: boolean
  className: string
  variants: any
}
