import React from 'react'
import { withNamespaces } from 'react-i18next'

import Event from './event'

let Conferences = ({ conferences, t }) => {
  return (
    <div className="container mx-auto py-8">
      {conferences.map(conference => (
        <Event event={conference} key={conference.name} />
      ))}
    </div>
  )
}

export default withNamespaces('conferences')(Conferences)
