import Entry from './entry'
import _ from 'lodash'

function Entries({ entries }) {
  if (entries) {
    return (
      <div>
        {
        _.map(entries , (e) => (
          <div key={e.id} className="py-2">
            <Entry id={e.id} title={e.title} content={e.content} image={e.image} />
          </div>
        ))}
      </div>
      
    )
  } else {
    return null
  }
}

export default Entries
