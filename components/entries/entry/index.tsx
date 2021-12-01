import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { Form, Input } from 'antd';
import ImageControl from '../../imagepicker'



export default function Entry(entry) {
  const [gsbm, setgsbm] = useState('')
  const [qxbh, setqxbh] = useState('')
  const [jzcbh, setjzcbh] = useState('')
  const [zcmc, setzcmc] = useState('')
  const [ggxh, setggxh] = useState('')
  const [ly, setly] = useState('')
  const [yt, setyt] = useState('')
  const [zt, setzt] = useState('')
  const [azdd, setazdd] = useState('')
  const [jz, setjz] = useState('')
  const [zypz, setzypz] = useState('')
  const [hdsj, sethdsj] = useState('')
  const [hdfs, sethdfs] = useState('')
  const [gsbgjl, setgsbgjl] = useState('')
  const [bz, setbz] = useState('')
  const [pdqk, setpdqk] = useState('')
  const [bq, setbq] = useState('')
  const [image, setImage] = useState([])
  const [image1, setImage1] = useState([])
  const [imagezc, setImagezc] = useState([])
  const router = useRouter()
  const id = router.query.id?.toString()
  if (id && !gsbm) {
    getEntry(id).then(res => {
      setgsbm(res.gsbm)
      setqxbh(res.qxbh)
      setjzcbh(res.jzcbh)
      setzcmc(res.zcmc)
      setggxh(res.ggxh)
      setly(res.ly)
      setyt(res.yt)
      setzt(res.zt)
      setzypz(res.zypz)
      setazdd(res.azdd)
      setjz(res.jz)
      sethdsj(res.hdsj)
      sethdfs(res.hdfs)
      setgsbgjl(res.gsbgjl)
      setpdqk(res.pdqk)
      setbq(res.bq)
      setbz(res.bz)
    })
  }

  useEffect(() => {
  }, [gsbm, qxbh, jzcbh, zcmc, ggxh, ly, yt, zt, azdd, jz, zypz, hdsj, hdfs, gsbgjl, bz, pdqk, bq])

  async function getEntry(id: any) {
    if (id) {
      const url = `/api/get-entry?id=${id}`
      const res = await fetch(url, {
        method: 'GET',
      })
      return await res.json()
    }

    return (
      <div>
        <Form
          layout="inline"
          requiredMark={true}
        >
          <Form.Item label="归属部门" rules={[{ required: true, message: 'Missing 归属部门' }]}>
            <Input style={{ width: '100%' }} value={gsbm} onChange={(e) => setgsbm(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="气象编号" rules={[{ required: true, message: 'Missing 气象编号' }]}>
            <Input style={{ width: '100%' }} value={qxbh} onChange={(e) => setqxbh(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="局资产编号" rules={[{ required: true, message: 'Missing 局资产编号' }]}>
            <Input style={{ width: '100%' }} value={jzcbh} onChange={(e) => setjzcbh(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="资产名称" rules={[{ required: true, message: 'Missing 资产名称' }]}>
            <Input style={{ width: '100%' }} value={zcmc} onChange={(e) => setzcmc(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="规格型号" rules={[{ required: true, message: 'Missing 规格型号' }]}>
            <Input style={{ width: '100%' }} value={ggxh} onChange={(e) => setggxh(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="来源" rules={[{ required: true, message: 'Missing 来源' }]}>
            <Input style={{ width: '100%' }} value={ly} onChange={(e) => setly(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="用途" rules={[{ required: true, message: 'Missing 用途' }]}>
            <Input style={{ width: '100%' }} value={yt} onChange={(e) => setyt(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="状态" rules={[{ required: true, message: 'Missing 状态' }]}>
            <Input style={{ width: '100%' }} value={zt} onChange={(e) => setzt(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="安置地点" rules={[{ required: true, message: 'Missing 安置地点' }]}>
            <Input style={{ width: '100%' }} value={azdd} onChange={(e) => setazdd(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="价值" rules={[{ required: true, message: 'Missing 价值' }]}>
            <Input style={{ width: '100%' }} value={jz} onChange={(e) => setjz(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="主要配置" rules={[{ required: true, message: 'Missing 主要配置' }]}>
            <Input style={{ width: '100%' }} value={zypz} onChange={(e) => setzypz(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="获得时间" rules={[{ required: true, message: 'Missing 取得时间' }]}>
            <Input style={{ width: '100%' }} value={hdsj} onChange={(e) => sethdsj(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="获得方式" rules={[{ required: true, message: 'Missing 获得方式' }]}>
            <Input style={{ width: '100%' }} value={hdfs} onChange={(e) => sethdfs(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="归属变更经历" rules={[{ required: true, message: 'Missing 归属变更经历' }]}>
            <Input style={{ width: '100%' }} value={gsbgjl} onChange={(e) => setgsbgjl(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="备注" rules={[{ required: true, message: 'Missing 备注' }]}>
            <Input style={{ width: '100%' }} value={bz} onChange={(e) => setbz(e.target.value)} size="small" />
          </Form.Item>
          <Form.Item label="标签照片" rules={[{ required: true, message: 'Missing 标签照片' }]}>
            <ImageControl files={image} imagePath={`/${id}/bqzp.jpg`} onChange={(files, type, index) => { setImage(files) }} />
          </Form.Item>
          <Form.Item label="序列号照片" rules={[{ required: true, message: 'Missing 序列号照片' }]}>
            <ImageControl files={image1} imagePath={`/${id}/xlhzp.jpg`} onChange={(files, type, index) => { setImage1(files) }} />
          </Form.Item>
          <Form.Item label="资产照片" rules={[{ required: true, message: 'Missing 资产照片' }]}>
            <ImageControl files={imagezc} imagePath={`/${id}/zczp.jpg`} onChange={(files, type, index) => { setImagezc(files) }} />
          </Form.Item>
        </Form>

      </div>
    )
  }

}
