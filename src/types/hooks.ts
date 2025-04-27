/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export type MotionHookT = {
  children: React.ReactElement
  duration: number
  delay: number
  type?: string
}

export type MotionSectionT = {
  children: React.ReactElement
  duration: number
  delay: number
  opacity_initial: number
  height_initial: number
  height_viewported: number
  once: boolean
  className: string
  style: object
  sectionMounted: () => void
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
  complete: any
}

export type MotionDescriptionT = {
  children: React.ReactElement
  duration: number
  color: string
  delay: number
  height_initial: number
  height_viewported: number
  once: boolean
  className: string
  complete: any
  refOne: any
  style: any
}

export type MotionPartTextT = {
  children: React.ReactElement
  duration: number
  color: string
  delay: number
  right_initial: number
  right_viewported: number
  once: boolean
  className: string
  complete: any
  refOutdoor: any
}
