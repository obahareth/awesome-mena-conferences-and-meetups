import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { withNamespaces } from "react-i18next"

import Layout from '../components/layout'
import Conference from '../components/conference'

let parseConferences = data => {
  // TODO: Make this safer
  return data.allFile.edges[0].node.childConferencesJson.conferences
}

let Conferences = ({ data, t }) => {
  let conferences = parseConferences(data)

  return (
    <Layout>
      <Helmet title={t('heading')}></Helmet>
      <div className="container mx-auto py-8">
        {conferences.map(conference => (
          <Conference conference={conference} key={conference.name} />
        ))}
        <div className="text-center py-4">
          <Link to="/">{t("back_to_homepage")}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default withNamespaces("conferences")(Conferences)

// TODO: Use current locale
export const query = graphql`
  {
    allFile(
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
  }
`
