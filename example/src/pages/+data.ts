export { data }

import path from 'path'
import fs from 'fs'

async function data() {
  const p = path.join(process.cwd(), './README.md')

  const readme = fs.readFileSync(p, 'utf-8')

  return { 
    readme
  }
}
