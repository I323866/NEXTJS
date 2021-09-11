import { NextApiHandler } from 'next'
import { query } from '../../lib/db'
import fs  from 'fs'


const handler: NextApiHandler = async (req, res) => {


  try {
    const dirs = fs.readdirSync('public/');
    let path = ""
    let bqzp 
    let xlhzp
    let zczp
    for (const dir of dirs){
      path = `public/${dir}/bqzp.jpg`
      fs.access(path, (err) => {
        if (!err) {
          const stat = fs.statSync(path)
          bqzp = stat.ctime
        }
      });
      path = `public/${dir}/bqzp.jpg`
      fs.access(path, (err) => {
        if (!err) {
          const stat = fs.statSync(path)
          xlhzp = stat.ctime
        }
      });
      path = `public/${dir}/bqzp.jpg`
      fs.access(path, (err) => {
        if (!err) {
          const stat = fs.statSync(path)
          zczp = stat.ctime
        }
      });
      const results = await query(
        `
        UPDATE entries
        SET bqzp = ? , xlhzp = ? ,zczp  = ?
        WHERE id = ?
        `,
        [bqzp ? bqzp :"" , xlhzp ? xlhzp :"" , zczp ? zczp :"", dir]
      )
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
