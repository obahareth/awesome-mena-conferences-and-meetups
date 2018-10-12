import React from 'react'
import { withNamespaces } from 'react-i18next'

import Meetup from '../components/meetup'

let Meetups = ({ meetups, t }) => {
  return (
    <div className="container mx-auto py-8">
      {meetups.map(meetup => (
        <Meetup meetup={meetup} key={meetup.name} />
      ))}
    </div>
  )
}

export default withNamespaces('meetups')(Meetups)
