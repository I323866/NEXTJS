import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { Form, Input, Radio } from 'antd';
import Previews from '../preview'

export default function EntryForm(entry) {
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
  const router = useRouter()
  const id = router.query.id?.toString()
  if (id && !gsbm ) {
    getEntry(id).then(res =>{
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
      setbz(res.bz)
    })
  }

  async function getEntry(id: any) {
    if (id){
      const url = `/api/get-entry?id=${id}`
      const res = await fetch(url, {
        method: 'GET',
      })
      return await res.json()
    }
  }
  return (
    <div>
      <Form 
        layout="inline"
        requiredMark={true}
      >
        <Form.Item label="归属部门" rules={[{ required: true, message: 'Missing 归属部门' }]}>
          <Input disabled={true} style={{ width: '100%' }} value={gsbm} size="small" />
        </Form.Item>
        <Form.Item label="气象编号" rules={[{ required: true, message: 'Missing 气象编号' }]}>
          <Input disabled={true} style={{ width: '100%' }} value={qxbh} size="small" />
        </Form.Item>
        <Form.Item label="局资产编号" rules={[{ required: true, message: 'Missing 局资产编号' }]}>
          <Input disabled={true} style={{ width: '100%' }} value={jzcbh} size="small" />
        </Form.Item>
        <Form.Item label="资产名称" rules={[{ required: true, message: 'Missing 资产名称' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={zcmc} size="small" />
        </Form.Item>
        <Form.Item label="规格型号" rules={[{ required: true, message: 'Missing 规格型号' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={ggxh} size="small" />
        </Form.Item>
        <Form.Item label="来源" rules={[{ required: true, message: 'Missing 来源' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={ly}size="small" />
        </Form.Item>
        <Form.Item label="用途" rules={[{ required: true, message: 'Missing 用途' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={yt} size="small" />
        </Form.Item>
        <Form.Item label="状态" rules={[{ required: true, message: 'Missing 状态' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={zt} size="small" />
        </Form.Item>
        <Form.Item label="安置地点" rules={[{ required: true, message: 'Missing 安置地点' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={azdd} size="small" />
        </Form.Item>
        <Form.Item label="价值" rules={[{ required: true, message: 'Missing 价值' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={jz} size="small" />
        </Form.Item>
        <Form.Item label="主要配置" rules={[{ required: true, message: 'Missing 主要配置' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={zypz} size="small" />
        </Form.Item>
        <Form.Item label="获得时间" rules={[{ required: true, message: 'Missing 取得时间' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={hdsj} size="small" />
        </Form.Item>
        <Form.Item label="获得方式" rules={[{ required: true, message: 'Missing 获得方式' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={hdfs} size="small" />
        </Form.Item>
        <Form.Item label="归属变更经历" rules={[{ required: true, message: 'Missing 归属变更经历' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={gsbgjl} size="small" />
        </Form.Item>
        <Form.Item label="备注" rules={[{ required: true, message: 'Missing 备注' }]}>
          <Input disabled={true}  style={{ width: '100%' }} value={bz} size="small" />
        </Form.Item>
        <Form.Item label="标签照片" rules={[{ required: true, message: 'Missing 标签照片' }]}>
          <Previews imagePath={`/${id}/bqzp.jpg`} />
        </Form.Item>
        <Form.Item label="序列号照片" rules={[{ required: true, message: 'Missing 序列号照片' }]}>
          <Previews imagePath={`/${id}/xlhzp.jpg`} />
        </Form.Item>
        <Form.Item label="资产照片" rules={[{ required: true, message: 'Missing 资产照片' }]}>
          <Previews imagePath={`/${id}/zczp.jpg`} />
        </Form.Item>
      </Form>

    </div>
  )
}
