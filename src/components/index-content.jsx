import React from 'react'
import Helmet from 'react-helmet'
import { withNamespaces } from 'react-i18next'

import Layout from '../components/layout'
import Conferences from '../components/conferences'
import Meetups from '../components/meetups'
import Tabs from '../components/tabs'

import GithubCornerRightIcon from '!svg-react-loader!../images/svg-icons/github-corner-right.svg?name=GithubCornerRightIcon'
import GlobeIcon from '!svg-react-loader!../images/svg-icons/globe.svg?name=GlobeIcon'

let IndexContent = ({ t, conferences, meetups, i18n }) => (
  <Layout>
    <Helmet title={t('heading')} />
    <GithubCornerRightIcon className="mt-4" />
    <div className="container mx-auto lg:py-24 lg:px-16 px-4 py-12">
      <div className="flex items-center">
        <GlobeIcon className="w-8 h-8 fill-current text-purple-dark" />
        <h1 className="ml-2">{t('title')}</h1>
      </div>
      <div className="py-4 text-lg mb-4 md:mb-8">
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
    </div>
  </Layout>
)

export default withNamespaces('index')(IndexContent)
