import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { withNamespaces } from 'react-i18next'

import Layout from '../components/layout'
import Conferences from '../components/conferences'
import Meetups from '../components/meetups'

let parseConferences = data => {
  // TODO: Make this safer
  return data.conferencesJson.edges[0].node.childConferencesJson.conferences
}

let parseMeetups = data => {
  // TODO: Make this safer
  return data.meetupsJson.edges[0].node.childMeetupsJson.meetups
}

const IndexPage = ({ t, data }) => {
  let conferences = parseConferences(data)
  let meetups = parseMeetups(data)

  return (
    <Layout>
      <Helmet title={t('heading')} />
      <div className="container mx-auto py-24 px-16">
        <div className="flex items-center">
          <svg
            className="w-8 h-8 fill-current text-purple-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
          </svg>
          <h1 className="ml-2">{t('title')}</h1>
        </div>
        <div className="py-4 text-lg">
          {`${t('check_out_awesome')} ${t('conferences')} ${t('and')} ${t(
            'meetups'
          )} ${t('in_mena')}`}
        </div>
        <div id="conferences">
          <h2>{t('Conferences')}</h2>
          <Conferences conferences={conferences} />
        </div>
        <div id="meetups">
          <h2>{t('Meetups')}</h2>
          <Meetups meetups={meetups} />
        </div>
        <div className="text-grey-darker font-thin">
          {t('sign_up_for_updates')}
        </div>
        <div className="py-4 flex item-center pb-2">
          <input className="bg-white shadow-lg p-2 rounded w-1/4" type="text" />
          <button className="bg-purple-dark text-white p-2 shadow-lg text-sm px-2 ml-2 rounded">
            {t('submit')}
          </button>
        </div>
        <a href="https://github.com/obahareth/awesome-mena-conferences-and-meetups">
          <svg
            class="w-8 h-6 fill-current text-purple-dark mt-4"
            aria-labelledby="simpleicons-github-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="simpleicons-github-icon">GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
    </Layout>
  )
}

export default withNamespaces('index')(IndexPage)

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
