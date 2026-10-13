import { imageWidths } from '~/data/imageWidths'

export default function useResponsiveImage(src: string) {
  const base = src.replace(/\.webp$/i, '')
  const sourceWidth = imageWidths[src]

  if (!sourceWidth) {
    return undefined
  }

  const widths = [480, 960, 1280].filter(width => width < sourceWidth)
  return [
    ...widths.map(width => `${base}-${width}w.webp ${width}w`),
    `${src} ${sourceWidth}w`,
  ].join(', ')
}
