import type { APIRoute } from 'astro'

// Enkelt sitemap uten ekstra avhengighet. Legges det til nye sider, føres de opp her.
const sider = ['', 'galleri', 'priser', 'om-meg', 'kontakt', 'personvern']

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL
  const rot = site ? new URL(base, site).href : base
  const dato = new Date().toISOString().slice(0, 10)

  const url = (sti: string) => {
    const full = sti ? `${rot}${sti}/` : rot
    return `  <url>\n    <loc>${full}</loc>\n    <lastmod>${dato}</lastmod>\n  </url>`
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sider.map(url).join('\n')}
</urlset>
`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
