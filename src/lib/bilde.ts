import dimensjoner from '../data/bildedimensjoner.json'

export interface Bilde {
  src: string
  srcset?: string
  width?: number
  height?: number
}

type Oppslag = Record<string, { width: number; height: number; varianter: { url: string; width: number }[] }>
const kart = dimensjoner as Oppslag

const base = import.meta.env.BASE_URL

/**
 * Tar en bildesti slik den står i images.ts (`/images/navn.webp`) og gir tilbake
 * ferdig base-prefikset src, srcset og intrinsiske mål. Målene hindrer layout-hopp,
 * og srcset gjør at mobil slipper å laste ned originalen på flere tusen piksler.
 */
export function bilde(sti: string): Bilde {
  const nokkel = sti.startsWith('/') ? sti : `/${sti}`
  const treff = kart[nokkel]
  const src = base + nokkel.replace(/^\//, '')
  if (!treff) return { src }
  return {
    src,
    srcset: treff.varianter.map(v => `${base}${v.url.replace(/^\//, '')} ${v.width}w`).join(', '),
    width: treff.width,
    height: treff.height,
  }
}
