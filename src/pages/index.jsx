import React from 'react'
import { navigate, withPrefix } from 'gatsby'
import { withNamespaces } from 'react-i18next'

import Layout from '../components/layout'

class RedirectIndex extends React.PureComponent {
  componentDidMount() {
    const homeUrl = withPrefix('/ar/')
    navigate(homeUrl)
  }

  render() {
    return <Layout><div /></Layout>
  }
}

export default withNamespaces('index')(RedirectIndex)
