import React from 'react'
import { navigate, withPrefix } from 'gatsby'
import { withNamespaces } from 'react-i18next'

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const homeUrl = withPrefix('/ar/');
      this.props.i18n.changeLanguage('ar')
      navigate(homeUrl)
    }
  }

  render() {
    return <div />
  }
}

export default withNamespaces('index')(RedirectIndex)
