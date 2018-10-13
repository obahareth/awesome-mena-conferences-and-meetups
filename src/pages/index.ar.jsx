import React from 'react'
import { graphql } from 'gatsby'
import { withNamespaces } from 'react-i18next'

import { parseMeetups, parseConferences } from '../helpers/graphql-json-parser'
import IndexContent from '../components/index-content'

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.i18n.changeLanguage('ar')
  }

  render() {
    let { data } = this.props
    let meetups = parseMeetups(data)
    let conferences = parseConferences(data)

    return <IndexContent conferences={conferences} meetups={meetups} />
  }
}

export const query = graphql`
  {
    conferencesJson: allFile(
      filter: { name: { eq: "ar" }, relativeDirectory: { eq: "conferences" } }
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
      filter: { name: { eq: "ar" }, relativeDirectory: { eq: "meetups" } }
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

export default withNamespaces('index')(IndexPage)
