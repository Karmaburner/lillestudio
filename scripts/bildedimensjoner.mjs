// Leser alle bilder i public/images, skriver bredde og hoyde til
// src/data/bildedimensjoner.json og lager nedskalerte varianter i
// public/images/avledet/ som brukes i srcset. Variantene er ikke i git;
// de lages av `npm run bilder`, som kjores automatisk for dev og build.
import sharp from 'sharp'
import { readdir, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, extname, basename } from 'path'

const dir = './public/images'
const avledet = join(dir, 'avledet')
const BREDDER = [480, 800, 1200, 1600]

await mkdir(avledet, { recursive: true })

const filer = (await readdir(dir)).filter(f => ['.webp', '.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase()))

const kart = {}
let laget = 0

for (const fil of filer.sort()) {
  const kilde = join(dir, fil)
  const { width, height } = await sharp(kilde).metadata()
  const navn = basename(fil, extname(fil))
  const varianter = []

  for (const bredde of BREDDER) {
    if (bredde >= width) continue
    const ut = join(avledet, `${navn}-${bredde}.webp`)
    if (!existsSync(ut)) {
      await sharp(kilde).resize({ width: bredde }).webp({ quality: 80 }).toFile(ut)
      laget++
    }
    varianter.push({ url: `/images/avledet/${navn}-${bredde}.webp`, width: bredde })
  }
  varianter.push({ url: `/images/${fil}`, width })

  kart[`/images/${fil}`] = { width, height, varianter }
}

await writeFile('./src/data/bildedimensjoner.json', JSON.stringify(kart, null, 2) + '\n')
console.log(`Dimensjoner for ${filer.length} bilder. ${laget} nye varianter.`)
