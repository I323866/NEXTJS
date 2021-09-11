import { NextApiHandler } from 'next'
import { query } from '../../lib/db'
import fs from 'fs'
import moment from 'moment'
// const filter = new Filter()
import _ from 'lodash'
const now = moment().format("YYYY-MM-DD HH:mm:ss"); 
console.log(now)
const handler: NextApiHandler = async (req, res) => {
  const { gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq , bqzp, xlhzp, zczp } = req.body
  try {
    const results = await query(
      `
      INSERT INTO entries (gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq, bqzp, xlhzp, zczp)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq , bqzp ? now : "", xlhzp ? now : "", zczp? now : ""]
    )
  const id = _.get(results , 'insertId')
  const path = 'public/' + id + '/'
  fs.mkdirSync(path)
  const bqzpfile = path + 'bqzp' +'.jpg';
  const bqzpbase64 = bqzp.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  const bqzpdataBuffer = new Buffer(bqzpbase64, 'base64'); //把base64码转成buffer对象，
  fs.writeFile(bqzpfile, bqzpdataBuffer, function(err){//用fs写入文件
      if(err){
          console.log(err);
      }else{
          console.log('bqzp写入成功！');
      }
  })
  const xlhzpfile = path + 'xlhzp' +'.jpg';
  const xlhzpbase64 = xlhzp.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  const xlhzpdataBuffer = new Buffer(xlhzpbase64, 'base64'); //把base64码转成buffer对象，
  fs.writeFile(xlhzpfile, xlhzpdataBuffer, function(err){//用fs写入文件
      if(err){
          console.log(err);
      }else{
          console.log('xlhzp写入成功！');
      }
  })
  const zczpfile = path + 'zczp' +'.jpg';
  const zczpbase64 = zczp.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  const zczpdataBuffer = new Buffer(zczpbase64, 'base64'); //把base64码转成buffer对象，
  fs.writeFile(zczpfile, zczpdataBuffer, function(err){//用fs写入文件
      if(err){
          console.log(err);
      }else{
          console.log('zczp写入成功！');
      }
  })
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
}
export default handler
