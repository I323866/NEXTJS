import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'
import multiparty from 'multiparty'
import multer from 'multer'
import fs from 'fs'
const filter = new Filter()
const upload = multer({ dest: './public/' })

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
const handler: NextApiHandler = async (req, res) => {

  // const path = 'public/'+ Date.now() +'.png';
  // const base64 = req.body.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  // const dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
  // fs.writeFile(path, dataBuffer, function(err){//用fs写入文件
  //     if(err){
  //         console.log(err);
  //     }else{
  //         console.log('写入成功！');
  //     }
  // })

  await runMiddleware(req, res,upload.single('abc'))
  console.log('a')
  // var form = new multiparty.Form();
  // form.parse(req, function (err, fields, files) {
  //    console.log(fields);
  //    console.log(files);
  // });
  const { gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq } = req.body
  try {
    // const results = await query(
    //   `
    //   // INSERT INTO entries (gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq)
    //   // VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    //   `,
    //   // [filter.clean(gsbm), 
    //   // filter.clean(qxbh), 
    //   // filter.clean(jzcbh), 
    //   // filter.clean(zcmc), 
    //   // filter.clean(ggxh), 
    //   // filter.clean(ly), 
    //   // filter.clean(yt),
    //   // filter.clean(zt), 
    //   // filter.clean(azdd), 
    //   // filter.clean(jz), 
    //   // filter.clean(zypz), 
    //   // filter.clean(hdsj), 
    //   // filter.clean(hdfs), 
    //   // filter.clean(gsbgjl), 
    //   // filter.clean(bz), 
    //   // filter.clean(pdqk), 
    //   // filter.clean(bq)]
    //   [gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq]
    // )

    // return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
