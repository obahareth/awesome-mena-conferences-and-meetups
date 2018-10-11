import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Meetup from '../components/meetup'

let parseMeetups = data => {
  // TODO: Make this safer
  return data.allFile.edges[0].node.childMeetupsJson.meetups
}

let Meetups = ({ data }) => {
  let meetups = parseMeetups(data)
  return (
    <Layout>
      <div className="container mx-auto py-8">
        {meetups.map(meetup => (
          <Meetup meetup={meetup} key={meetup.name} />
        ))}
        <div className="text-center py-4">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  )
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
