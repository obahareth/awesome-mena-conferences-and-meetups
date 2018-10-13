import React from 'react'
import TwitterIcon from '!svg-react-loader!../images/svg-icons/twitter.svg?name=TwitterIcon'

const Meetup = ({ meetup }) => (
  <div className="bg-white rounded shadow">
    <div className="bg-grey-lighter border-b border-grey-light text-lg font-bold text-center py-4">
      {meetup.name}
    </div>

    <div className="p-4">
      <div className="leading-normal">{meetup.description}</div>
      <div className="flex justify-between mt-4">
        <a
          className="no-underline text-purple-dark hover:underline truncate"
          href={meetup.website}
        >
          {meetup.website}
        </a>
        <a
          className="no-underline text-purple-dark hover:underline"
          href={`https://twitter.com/${meetup.twitter}`}
        >
          <TwitterIcon className="w-8 h-6 fill-current text-purple-dark" />
        </a>
      </div>
    </div>
  </div>
)

export default Meetup
