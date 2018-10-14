import React from 'react'
import { withNamespaces } from 'react-i18next'

import TwitterIcon from '!svg-react-loader!../images/svg-icons/twitter.svg?name=TwitterIcon'
import LinkIcon from '!svg-react-loader!../images/svg-icons/baseline-link-24px.svg?name=LinkIcon'

const Event = ({ event, t }) => (
  <div className="bg-white rounded shadow">
    <div className="flex rounded-t justify-between text-grey-darkest bg-grey-lighter text-lg font-bold p-4 items-center">
      {event.name}
    </div>
    {
      (event.date && event.location) &&
      <div className="px-4 pb-4 md:pb-2 bg-grey-lighter block md:flex justify-between text-grey-darker ">
        <div className="wrap-words mb-2 text-sm">{event.date}</div>
        <div className="wrap-words text-xs">{event.location}</div>
      </div>
    }
    <div className="p-4 leading-normal text-sm">{event.description}</div>
      <div className="p-4 bg-grey-lightest rounded-b">
        <div className="flex items-center">
          {
            event.website &&
            <a
                className="no-underline mr-4 hover:underline text-purple-dark"
                href={event.website}
              >
              <LinkIcon className="fill-current" />
            </a>
          }
          {
            event.twitter &&
            <a
              className="no-underline mr-4 text-purple-dark hover:underline"
              href={`https://twitter.com/${event.twitter}`}
            >
              <TwitterIcon className="h-5 fill-current text-purple-dark" />
            </a>
          }
        </div>
      </div>
  </div>
)

export default withNamespaces('index')(Event)
