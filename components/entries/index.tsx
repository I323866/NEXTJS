import Entry from './entry'
import _ from 'lodash'
import { Table, Input, Space } from 'antd';
import ButtonLink from '@/components/button-link'
import { mutate } from 'swr'

import Button from '@/components/button'
import { useEffect, useState } from 'react'
import useUser from '@/lib/useUser';

function Entries({ entries }) {
  const [deleting, setDeleting] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [data, setData] = useState(entries)
  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '3%'
    },
    {
      title: '归属部门',
      dataIndex: 'gsbm',
      key: 'gsbm'
    },
    {
      title: '气象编号',
      dataIndex: 'qxbh',
      key: 'qxbh',
    },
    {
      title: '局资产编号',
      dataIndex: 'jzcbh',
      key: 'jzcbh'
    },
    {
      title: '资产名称',
      dataIndex: 'zcmc',
      key: 'zcmc'
    },
    {
      title: '规格型号',
      dataIndex: 'ggxh',
      key: 'ggxh'
    },
    // {
    //   title: '来源',
    //   dataIndex: 'ly',
    //   key: 'ly'
    // },
    // {
    //   title: '用途',
    //   dataIndex: 'yt',
    //   key: 'yt'
    // },
    {
      title: '状态',
      dataIndex: 'zt',
      key: 'zt'
    },
    {
      title: '安置地点',
      dataIndex: 'azdd',
      key: 'azdd'
    },
    {
      title: '获得时间',
      dataIndex: 'hdsj',
      key: 'hdsj'
    },
    {
      title: '获得方式',
      dataIndex: 'hdfs',
      key: 'hdfs'
    },
    {
      title: '归属变更经历',
      dataIndex: 'gsbgjl',
      key: 'gsbgjl'
    },
    {
      title: '备注',
      dataIndex: 'bz',
      ellipsis: true,
      width: '5%',
      key: 'bz'

    },

    {
      title: '操作',
      key: 'action',
      width: '8%',
      fixed: 'right',
      ellipsis: true,
      render: (text, record) => (
        // <Space size="small">
        <div>
          <ButtonLink
            href={`/entry/edit/${record.id}`}
            className="h-5 py-0 mx-1"
          >
            查看
          </ButtonLink>
          <Button
            disabled={deleting}
            onClick={() => deleteEntry(record)}
            className="h-5 py-0 mx-1"
          >
            {deleting ? '删除中 ...' : '删除'}
          </Button>
        </div>
        // </Space>
      ),
    },
  ];
  const { user } = useUser({ redirectTo: "/login" });
  let updatedEntries = _.cloneDeep(data)
  if (user?.isLoggedIn){
    if ( user?.results[0]?.isAdmin !== "true"){
        _.remove(updatedEntries,(entry)=>{
          return _.get(entry , "gsbm") != user.results[0]?.department
        })
    }
  }else{
    updatedEntries = []
  }
  async function deleteEntry(record) {
    setDeleting(true)
    let res = await fetch(`/api/delete-entry?id=${record.id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-entries')
    setDeleting(false)
  }
  async function searchEntry(keyword) {
    let res = await fetch(`/api/get-entries?keyword=${keyword}`, { method: 'GET' })
    let json = await res.json()
    if (json){
      setData(json)
    }
  }

  return (
    <div>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)} size="small"
        className="h-5 py-0 mx-1"
      >
      </Input>
      <Button
        className="h-5 py-0 mx-1"
        onClick={() => searchEntry(keyword)}
      >
        {'查找'}
      </Button>
      <Table columns={columns} dataSource={data} pagination={false} bordered  scroll={{ x: 1500 }} />
    </div>)

}

export default Entries
