import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.query && req.query.keyword) {
      const results = await query(`
      SELECT * FROM entries
      WHERE jzcbh like '%${req.query.keyword}%' 
      OR qxbh like '%${req.query.keyword}%' 
      OR bz like '%${req.query.keyword}%' 
      ORDER BY updated_at DESC
	    LIMIT 10000
    `)
      return res.json(results)
    } else {
      const results = await query(`
      SELECT * FROM entries
      ORDER BY updated_at DESC
      LIMIT 15
    `)
      return res.json(results)
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
