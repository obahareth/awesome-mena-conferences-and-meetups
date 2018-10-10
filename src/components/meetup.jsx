import React from 'react'
import { Link } from 'gatsby'

const Meetup = ({ meetup }) => (
  <div>
    <label>Name</label>
    <p>{meetup.name}</p>

    <label>Description</label>
    <p>{meetup.description}</p>

    <label>Website</label>
    <br />
    <a href={meetup.website}>{meetup.website}</a>
    <br />
    <br />

    <label>Twitter</label>
    <br />
    <a href={`https://twitter.com/${meetup.twitter}`}>{meetup.twitter}</a>
  </div>
)

export default Meetup
