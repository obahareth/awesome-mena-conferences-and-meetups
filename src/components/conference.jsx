import React from 'react'

const Conference = ({ conference }) => (
  <div className="bg-white rounded shadow">
    <div className="bg-grey-lighter border-b border-grey-light text-lg font-bold text-center py-4">
      {conference.name}
    </div>

    <div className="p-4">
      <div className="flex justify-between font-semibold mb-4 text-sm">
        <div className="">{conference.date}</div>
        <div>{conference.location}</div>
      </div>

      <div className="leading-normal">{conference.description}</div>
      <div className="flex justify-between mt-4">
        <a
          className="no-underline text-purple-dark hover:underline"
          href={conference.website}
        >
          {conference.website}
        </a>
        <a
          className="no-underline text-purple-dark hover:underline"
          href={`https://twitter.com/${conference.twitter}`}
        >
          {conference.twitter}
        </a>
      </div>
    </div>
  </div>
)

export default Conference
