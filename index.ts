import fs from 'fs'
import pug from 'pug'

fs.readdirSync('./public/').forEach((fileName) => {
  fs.copyFileSync(`./public/${fileName}`, `./dist/${fileName}`)
})

const pages = fs
  .readdirSync('./src/')
  .filter((fileName) => fileName.match(/^[^_].*\.pug$/))
  .map((fileName) => fileName.replace(/\.pug$/, ''))

pages.forEach((page) => {
  const html = pug.renderFile(`./src/${page}.pug`, {
    pretty: true
  })
  fs.writeFileSync(`./dist/${page}.html`, html)
})
