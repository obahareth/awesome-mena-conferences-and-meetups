import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Conference from '../components/conference'

let parseConferences = (data) => {
  // TODO: Make this safer
  return data.allFile.edges[0].node.childConferencesJson.conferences;
}

let Conferences = ({data}) => {
    let conferences = parseConferences(data);

    return (
      <Layout>
        <div className="container mx-auto py-8">
          {conferences.map(conference => (
            <Conference conference={conference} key={conference.name} />
          ))}
          <div className="text-center py-4">
            <Link to="/">Go back to the homepage</Link>
          </div>
        </div>
      </Layout>
    )
}

export default Conferences

// TODO: Use current locale
export const query = graphql`
{
  allFile(filter: {name: {eq: "en"}, relativeDirectory: {eq: "conferences"}}) {
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
}
`
