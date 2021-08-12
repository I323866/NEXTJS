import Container from '@/components/container'
import Nav from '@/components/nav'
import EditEntryForm from '@/components/edit-entry-form'
import { useRouter } from 'next/router'

import { useEntry } from '@/lib/swr-hooks'
export default function EditEntryPage({aaa}) {
  console.log()
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useEntry(id)

  return (
    <>
      <Nav title="编辑" />
      <Container>
        <EditEntryForm entry={data} />
      </Container>
    </>
  )
}
