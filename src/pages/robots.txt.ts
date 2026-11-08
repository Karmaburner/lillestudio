import type { APIRoute } from 'astro'

// Så lenge utkastet ligger på github.io skal ingenting indekseres. Når site i
// astro.config.mjs peker på lillestudio.no, åpnes siden og sitemap føres opp.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL
  const erUtkast = site?.hostname.endsWith('github.io') ?? false

  const tekst = erUtkast
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${site ? new URL(`${base}sitemap.xml`, site).href : `${base}sitemap.xml`}\n`

  return new Response(tekst, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
