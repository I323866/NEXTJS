import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { title, content, image } = req.body
  try {
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: '`title` and `content` are both required' })
    }

    const results = await query(
      `
      INSERT INTO entries (title, content, image)
      VALUES (?, ?, ?)
      `,
      [filter.clean(title), filter.clean(content), filter.clean(image)]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
