import React from 'react'
import { graphql } from 'gatsby'

import { parseMeetups, parseConferences } from '../helpers/graphql-json-parser'
import IndexContent from '../components/index-content'

class IndexPage extends React.Component {
  render() {
    let { data } = this.props
    let meetups = parseMeetups(data)
    let conferences = parseConferences(data)

    return (
      <div dir="ltr">
        <IndexContent conferences={conferences} meetups={meetups} />
      </div>
    )
  }
}

export const query = graphql`
  {
    conferencesJson: allFile(
      filter: { name: { eq: "en" }, relativeDirectory: { eq: "conferences" } }
    ) {
      edges {
        node {
          childConferencesJson {
            conferences {
              name
              date
              location
              description
              website
              twitter
            }
          }
        }
      }
    }

    meetupsJson: allFile(
      filter: { name: { eq: "en" }, relativeDirectory: { eq: "meetups" } }
    ) {
      edges {
        node {
          childMeetupsJson {
            meetups {
              name
              description
              website
              twitter
            }
          }
        }
      }
    }
  }
`

export default IndexPage
