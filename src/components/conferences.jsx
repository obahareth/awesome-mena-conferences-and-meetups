import React from 'react'
import { withNamespaces } from 'react-i18next'

import Conference from '../components/conference'

let Conferences = ({ conferences, t }) => {
  return (
    <div className="container mx-auto py-8">
      {conferences.map(conference => (
        <Conference conference={conference} key={conference.name} />
      ))}
    </div>
  )
}

export default withNamespaces('conferences')(Conferences)
