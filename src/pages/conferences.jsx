import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Conference from '../components/conference'
import { readJson, getJsonUrl } from '../helpers/json-fetcher'

class Conferences extends React.Component {
  state = { conferences: [] }

  componentDidMount() {
    readJson(getJsonUrl(this.props.data), []).then(json => {
      this.setState({ conferences: json.conferences })
    })
  }

  render() {
    return (
      <Layout>
        {this.state.conferences.map(conference => (
          <Conference conference={conference} key={conference.name} />
        ))}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default Conferences

// TODO: Use current locale
export const query = graphql`
  {
    allFile(
      filter: { name: { eq: "en" }, relativeDirectory: { eq: "conferences" } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
