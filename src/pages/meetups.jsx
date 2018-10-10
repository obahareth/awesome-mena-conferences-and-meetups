import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Meetup from '../components/meetup'
import { readJson, getJsonUrl } from '../helpers/json-fetcher'

class Meetups extends React.Component {
  state = { meetups: [] }

  componentDidMount() {
    readJson(getJsonUrl(this.props.data), []).then(json => {
      this.setState({ meetups: json.meetups })
    })
  }

  render() {
    return (
      <Layout>
        {this.state.meetups.map(meetup => (
          <Meetup meetup={meetup} key={meetup.name} />
        ))}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default Meetups

// TODO: Use current locale
export const query = graphql`
  {
    allFile(
      filter: { name: { eq: "en" }, relativeDirectory: { eq: "meetups" } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
