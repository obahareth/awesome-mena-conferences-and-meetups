import React from 'react'
import { withNamespaces } from 'react-i18next'

import Event from '../components/event'

let Meetups = ({ meetups, t }) => {
  return (
    <div className="container mx-auto py-8">
      {meetups.map(meetup => (
        <Event event={meetup} key={meetup.name} />
      ))}
    </div>
  )
}

export default withNamespaces('meetups')(Meetups)
