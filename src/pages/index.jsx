import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { withNamespaces } from 'react-i18next'

import Layout from '../components/layout'
import Conferences from '../components/conferences'
import Meetups from '../components/meetups'
import Tabs from '../components/tabs'

import GithubIcon from "!svg-react-loader!../images/svg-icons/github.svg?name=GithubIcon";
import GlobeIcon from "!svg-react-loader!../images/svg-icons/globe.svg?name=GlobeIcon";

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
          <GlobeIcon className="w-8 h-8 fill-current text-purple-dark" />
          <h1 className="ml-2">{t('title')}</h1>
        </div>
        <div className="py-4 text-lg">
          {`${t('check_out_awesome')} ${t('conferences')} ${t('and')} ${t(
            'meetups'
          )} ${t('in_mena')}`}
        </div>
        <Tabs>
          <div id="conferences" label={t('Conferences')}>
            <Conferences conferences={conferences} />
          </div>
          <div id="meetups" label={t('Meetups')}>
            <Meetups meetups={meetups} />
          </div>
        </Tabs>
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
          <GithubIcon className="w-8 h-6 fill-current text-purple-dark mt-4"/>
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
