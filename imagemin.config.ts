import imagemin from 'imagemin'
import imageminOptipng from 'imagemin-optipng'
import { PluginOption } from 'vite'

interface ImageminOptions {
  destination: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: any[]
}

interface OptipngOptions {
  optimizationLevel: number
  colorTypeReduction: boolean
  paletteReduction: boolean
}

export function imageminBuilder(): PluginOption {
  return {
    name: 'imagemin-builder',
    async closeBundle() {
      await imagemin(['images/*.{jpg,jpeg,webp,png,svg}'], {
        destination: 'build/images',
        plugins: [
          imageminOptipng({
            optimizationLevel: 4,
            colorTypeReduction: false,
            paletteReduction: false,
          } as OptipngOptions),
        ],
        ignore: ['images/BG_PATENTS.jpg', 'images/girl_patched.png'],
      } as ImageminOptions)
      console.log('Images optimized with optipng!')
    },
  }
}
