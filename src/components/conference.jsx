import React from 'react'
import TwitterIcon from '!svg-react-loader!../images/svg-icons/twitter.svg?name=TwitterIcon'

const Conference = ({ conference }) => (
  <div className="bg-white rounded shadow">
    <div className="bg-grey-lighter border-b border-grey-light text-lg font-bold text-center py-4">
      {conference.name}
    </div>

    <div className="p-4">
      <div className="flex justify-between font-semibold mb-4 text-sm">
        <div className="wrap-words">{conference.date}</div>
        <div className="wrap-words">{conference.location}</div>
      </div>

      <div className="leading-normal">{conference.description}</div>
      <div className="flex justify-between mt-4">
        <a
          className="no-underline text-purple-dark hover:underline truncate"
          href={conference.website}
        >
          {conference.website}
        </a>
        <a
          className="no-underline text-purple-dark hover:underline"
          href={`https://twitter.com/${conference.twitter}`}
        >
          <TwitterIcon className="w-8 h-6 fill-current text-purple-dark" />
        </a>
      </div>
    </div>
  </div>
)

export default Conference
