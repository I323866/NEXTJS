import { useRouter } from 'next/router'

import { useEntry } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Nav from '@/components/nav'
import EntryForm from '@/components/entry-form'
export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useEntry(id)

  if (data) {
    return (
      <>
        <Nav title="View" />
        <Container>
          <EntryForm entry={data} />
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Nav title="View" />
        <Container>
          <h1 className="font-bold text-3xl my-2">...</h1>
          <p>...</p>
        </Container>
      </>
    )
  }
}
