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
        <div className="container mx-auto py-8">
          {this.state.meetups.map(meetup => (
            <Meetup meetup={meetup} key={meetup.name} />
          ))}
          <div className="text-center py-4">
            <Link to="/">Go back to the homepage</Link>
          </div>
        </div>
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
