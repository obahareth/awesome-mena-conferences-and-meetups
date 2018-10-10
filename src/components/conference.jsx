import React from 'react'

const Conference = ({ conference }) => (
  <div>
    <label>Name</label>
    <p>{conference.name}</p>

    <label>Description</label>
    <p>{conference.description}</p>

    <label>Date</label>
    <p>{conference.date}</p>

    <label>Location</label>
    <p>{conference.location}</p>

    <label>Website</label>
    <br />
    <a href={conference.website}>{conference.website}</a>
    <br />
    <br />

    <label>Twitter</label>
    <br />
    <a href={`https://twitter.com/${conference.twitter}`}>
      {conference.twitter}
    </a>
  </div>
)

export default Conference
