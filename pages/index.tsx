import Skeleton from 'react-loading-skeleton'
import Nav from '@/components/nav'
import Container from '@/components/container'
import Entries from '@/components/entries'

import _ from 'lodash'
import { useEntries } from '@/lib/swr-hooks'
import useUser from '@/lib/useUser'

export default function IndexPage() {
  const { user ,isLoaduser } = useUser({ redirectTo: "/login" });
  const { entries, isLoading } = useEntries()


  if (isLoading || isLoaduser) {
    return (
      <div>
          <Nav />
          <Container>
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
          </Container>
      </div>
    )
  }

  let updatedEntries = _.cloneDeep(entries)
  if (user?.isLoggedIn){
    if ( user?.results[0]?.isAdmin !== "true"){
        _.remove(updatedEntries,(entry)=>{
          return _.get(entry , "gsbm") != user.results[0]?.department
        })
    }
  }else{
    updatedEntries = []
  }
  return (
  
    <div>
        <Nav />
        <Container>
          <Entries entries={updatedEntries} />
        </Container>
    </div>
  )


}
