import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'

const dir = './public/images'
const files = await readdir(dir)

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

  const input = join(dir, file)
  const output = join(dir, basename(file, ext) + '.webp')

  const info = await sharp(input).webp({ quality: 82 }).toFile(output)
  const orig = (await import('fs')).statSync(input).size
  console.log(`${file} → ${basename(output)}  ${(orig/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB`)

  await unlink(input)
}
